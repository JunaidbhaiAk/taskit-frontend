'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useTasks from '@/hooks/useTasks';
const TaskForm = () => {
  const {taskTitle,updateTaskTitle,addTasks,isEditing} = useTasks();  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => updateTaskTitle(e.target.value);
  const handleClick = () => {
    if(taskTitle.length > 0) addTasks();

  }
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Enter Task" value={taskTitle} onChange={handleChange}/>
        <Button type="submit" onClick={handleClick}>{isEditing ? 'Update' : 'Add'}</Button>
    </div>
  )
}

export default TaskForm