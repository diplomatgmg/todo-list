import React, { type ReactElement } from 'react'
import './style.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd'
import { changeTaskOrder } from '../../redux/taskSlice'
import TaskItemDAD from '../TaskItem/TaskItemDAD'
import { type Task } from '../../types'
import _ from 'lodash'
import TaskItem from '../TaskItem/TaskItem'
import TaskCount from '../TaskCount/TaskCount'

const TaskList = (): ReactElement => {
  const tasks = useAppSelector(state => state.tasks.tasks)
  const dispatch = useAppDispatch()

  const activeTasks = tasks.filter(task => !task.isCompleted)
  const completedTasks = tasks.filter(task => task.isCompleted)

  const handleDragEnd = (result: DropResult): void => {
    const { destination, source } = result

    if (_.isNil(destination) || destination.index === source.index) {
      return
    }

    dispatch(changeTaskOrder({
      startIndex: source.index,
      endIndex: destination.index
    }))
  }

  const renderActiveTasks = (activeTasks: Task[]): ReactElement => {
    return (
      <>
        <TaskCount title="Активные задачи:" count={activeTasks.length} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {activeTasks.map((task, index) => (
                  <TaskItemDAD key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </>
    )
  }

  const renderCompletedTasks = (completedTasks: Task[]): ReactElement => {
    return (
      <>
        <TaskCount title="Завершённые задачи:" count={completedTasks.length} />
        <ul>
          {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </>
    )
  }

  return (
    <div className="tasks-list">
      {renderActiveTasks(activeTasks)}
      {renderCompletedTasks(completedTasks)}
    </div>
  )
}

export default TaskList
