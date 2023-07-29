import TaskItem from "./TaskItem"

export default function TaskList({tasks, onDeleteTask }) {
  return (
    <section>
        {tasks.map( task => (
            <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask}/>
        ))}
    </section>
  )
}
