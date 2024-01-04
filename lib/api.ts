
import axios from "axios";

const TaskClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task`,
  headers:{'Authorization': `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`}
});


export const getTasksFromDB = async() => {
    try {
        const res = await TaskClient.get(`/`)
        if (res.status === 200) return res.data;
    } catch (error) {
        console.log(error);
    }
}


export const createTaskInDB = async (task: string) => {
  try {
    const res = await TaskClient.post("/", { taskTitle: task });
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const updateTaskInDB = async (taskId:string,newTaskTitle:string) => {
    try {
        const res = await TaskClient.put("/",{taskId,taskTitle:newTaskTitle});
        if(res.status === 200) return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteTaskInDB = async (taskId:string) => {
    try {
        const res = await TaskClient.delete(`/${taskId}`);
        if(res.status === 200) return res.data;
    } catch (error) {
        console.log(error);
    }
}