'use client'
import React, { useEffect } from "react";
import TaskForm from "./TaskForm";
import useTasks from "@/hooks/useTasks";
import { TaskContextType } from "@/lib/types";
import TaskCard from "./TaskCard";
import { Button } from "./ui/button";
import useToken from "@/hooks/useToken";

const Main = () => {
  const { tasks,addAllTasks } = useTasks() as TaskContextType;
  const {deleteToken} = useToken();
  const handleClick = () => {
    deleteToken();
  }
  useEffect(() => {
    addAllTasks();
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex items-center space-x-4 w-[300px]">
        <TaskForm />
        <Button variant="outline" onClick={handleClick}>Logout</Button>
      </div>
      <div className="my-4 p-2">
        {tasks?.map((ele) => {
          const { taskTitle, _id } = ele;
          return <TaskCard title={taskTitle} key={_id} id={_id} />;
        })}
      </div>
    </main>
  );
};

export default Main;
