import React, { type FC, type ReactElement } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './style.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { DragDropContext, Droppable, Draggable, type DropResult } from 'react-beautiful-dnd'
import { changeTaskOrder } from '../../redux/taskSlice'
import _ from 'lodash'

interface TaskListProps {
  forIsCompleted: boolean
}

const TaskList: FC<TaskListProps> = ({ forIsCompleted }): ReactElement => {
  const tasks = useAppSelector(state => state.tasks.tasks)
  const dispatch = useAppDispatch()

  const filteredTasks = tasks.filter(task => task.isCompleted === forIsCompleted)

  const taskCountName = forIsCompleted ? 'Done' : 'Tasks to do'

  const handleDragEnd = (result: DropResult): void => {
    const { destination, source } = result
    if (_.isNil(destination) || destination.index === source.index) {
      return
    }

    dispatch(changeTaskOrder({ startIndex: source.index, endIndex: destination.index }))
  }

  return (
    <div className="tasks-list">
      <p className="tasks-list__count">
        {taskCountName} - {filteredTasks.length}
      </p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul className="tasks-list-list" {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <TaskItem task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default TaskList
