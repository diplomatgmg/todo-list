import React, { type FC, type ReactElement } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskItem from './TaskItem'
import { type Task } from '../../types'

interface DragAndDropTaskItemProps {
  task: Task
  index: number
}

const TaskItemDAD: FC<DragAndDropTaskItemProps> = ({ task, index }): ReactElement => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <TaskItem task={task} />
        </div>
      )}
    </Draggable>
  )
}

export default TaskItemDAD
