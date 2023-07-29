"use client"

import React, { useState } from 'react'

export default function TaskItem({task, onDeleteTask}) {

  const [confirmDelete,setConfirmDelete] = useState(false)

  const handleDelete = () => {
    setConfirmDelete(true)
  }
  
  function handleConfirmDelete(){
    onDeleteTask(task.id)
    setConfirmDelete(true)
  }
  function handleCancelDelete(){
    setConfirmDelete(false)
  }

  return (
    <section>
        <h3>{task.taskName}</h3>
        <p>Start date: {task.startDate}</p>
        <p>End date: {task.endDate}</p>
        <button onClick={()=> handleDelete()}>delete</button>

      {confirmDelete && (
        <div>
          <h3>are you sure you want to delete this task</h3>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div> 
      )}
    </section>
  )
}
