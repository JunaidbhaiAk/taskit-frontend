"use client";

import Main from "@/components/Main";
import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import { TaskProvider } from "@/context/TaskContext";
import useTasks from "@/hooks/useTasks";
import useToken from "@/hooks/useToken";
import { TaskContextType } from "@/lib/types";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { token } = useToken();
  if (token === ""){
    return redirect("/");
  } 
  else {
    return (
      <TaskProvider>
        <Main />
      </TaskProvider>
    );
  }
}
