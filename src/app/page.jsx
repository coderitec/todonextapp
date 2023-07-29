"use client"

import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export default function Home() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }
  return (
    <main >
      <h1>a task management app</h1>
      <TaskForm onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
    </main>
  )
}
