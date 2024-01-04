export type TaskContextType = {
    taskTitle:string;
    updateTaskTitle: (newTaskTitle:string) => void;
    addTasks: () => void;
    tasks: any[];
    deleteTask: (currTask:string) => void;
    toggleEdit:(id:string,title:string) => void;
    isEditing:boolean;
    addAllTasks:() => void;
}

export type TaskType = {
    _id:string;
    taskTitle:string;
    createdAt:string;
}

export type TaskCardProps = {
    title:string;
    id:string;
}