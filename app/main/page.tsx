"use client";

import Main from "@/components/Main";
import { TaskProvider } from "@/context/TaskContext";
import useToken from "@/hooks/useToken";
import { redirect } from "next/navigation";

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
