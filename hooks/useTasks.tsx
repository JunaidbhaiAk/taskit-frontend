'use client'
import { TaskContext } from '@/context/TaskContext'
import { getTasksFromDB } from '@/lib/api'
import { TaskContextType } from '@/lib/types'
import React, { useContext, useEffect, useState } from 'react'

const useTasks = () => {
  const {taskTitle,updateTaskTitle,addTasks,tasks,deleteTask,toggleEdit,isEditing,addAllTasks} = useContext(TaskContext) as TaskContextType;
  return {taskTitle,updateTaskTitle,addTasks,tasks,deleteTask,toggleEdit,isEditing,addAllTasks};
}

export default useTasks