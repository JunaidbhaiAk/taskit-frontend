"use client";
import { createTaskInDB, deleteTaskInDB, getTasksFromDB, updateTaskInDB } from "@/lib/api";
import { TaskContextType, TaskType } from "@/lib/types";
import React, { SetStateAction, useEffect } from "react";
import { createContext, useState } from "react";
export const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks,setTasks] = useState<TaskType[]>([]); // all tasks
  const [isEditing,setisEditing] = useState(false); //flag for eidt check
  const [taskTitle, setTasktitle] = useState<string>(""); //realtime input task
  const [taskToEdit,setTasktoEdit] = useState<string>(""); //task which user is selected to edit
  
  //creating useEffect to fetch task at starting point by userId
  const addAllTasks = async () => {
    await getTasksFromDB().then((data:SetStateAction<TaskType[]>) => setTasks(data));
  }
  
  const toggleEdit = (id:string,oldTitle:string) => {  //flag the task editing cocept to know user is editing the task
    setTasktitle(oldTitle) //setting input to old title so user can change it to new one
    setTasktoEdit(id); //setting id of task that to be editied
    setisEditing(true);
  }
  const updateTaskTitle = (newTaskTitle: string) => setTasktitle(newTaskTitle);  //onchange task title for input
  const addTasks = async() => {
    if(isEditing){   // this block if the user is editing the preexist task
      const updatedTasks = tasks.map((ele) => ele._id === taskToEdit ? {...ele,taskTitle} : ele); //if task found replace old title with new one else do not change anything
      const data = await updateTaskInDB(taskToEdit,taskTitle);   //updated task in database also
      console.log(data);
      setTasks(updatedTasks);
      setisEditing(false);
      setTasktitle('');
    }
    else{
      const data = await createTaskInDB(taskTitle);
      setTasks([...tasks,data])  // for addig new task
      setTasktitle('');
    } 
  }
  const deleteTask = async (toDeleteTaskId:string) => { //delete the task
    let preTasks = tasks.filter((ele) => ele._id !== toDeleteTaskId);
    await deleteTaskInDB(toDeleteTaskId);
    setTasks(preTasks);
  }
  return (
    <TaskContext.Provider value={{ taskTitle, updateTaskTitle,addTasks,tasks,deleteTask,toggleEdit,isEditing,addAllTasks}}>
      {children}
    </TaskContext.Provider>
  );
}
