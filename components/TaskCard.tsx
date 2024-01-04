'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskCardProps } from "@/lib/types";
import useTasks from "@/hooks/useTasks";

const TaskCard = (props:TaskCardProps) => {
  const {deleteTask,toggleEdit} = useTasks();
  const {title,id} = props;
  return (
    <Card className="w-[300px] mb-2">
      <CardHeader className="px-3 py-2 flex justify-between items-center flex-row">
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="space-x-0.5">
          <Button variant="ghost" size="icon" onClick={() => deleteTask(id)}>
            <Trash size={16} style={{ margin: 0 }} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => toggleEdit(id,title)}>
            <Pencil size={16} style={{ margin: 0 }} />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TaskCard;
