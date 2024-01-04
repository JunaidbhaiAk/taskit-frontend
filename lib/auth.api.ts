import axios from "axios";

const AuthClient = axios.create({
  baseURL: `${process.env.BACKEND_URL}/api/auth`,
});

export const addUser = async (data: any) => {
  try {
    const { email, password } = data;
    const res = await AuthClient.post("/", { email, password });
    return res;
  } catch (error) {
    console.log(error);
  }
};


export const loginUser = async (data:any) => {
    try {
        const { email, password } = data;
        const res = await AuthClient.post("/login",{email,password});
        return res;
    } catch (error) {
        console.log(error);
    }
}