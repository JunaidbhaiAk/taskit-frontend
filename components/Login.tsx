import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import validator from 'validator';
import { loginUser } from "@/lib/auth.api";
import { useRouter } from 'next/navigation'
import useToken from "@/hooks/useToken";
import { useToast } from "./ui/use-toast";
const Login = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [formInp,setFormInp] = useState({email:'',password:''});
  const {updateToken} = useToken() as any;
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setFormInp({...formInp,[e.target.name]:e.target.value}); 
  const handleClick = async () => {
    const {email,password} = formInp;
    if(email.length !== 0 && password.length !== 0){
      if(!validator.isEmail(formInp.email)){
        console.log('Enter Correct Email');
        return;
      }
      const data = await loginUser({email,password});
      if(data?.status === 200){
        const {token} = data?.data;
        updateToken(token);
        router.push('/main');
        toast({description:'LoggdIn Successfull'})
      }
      else{
        toast({description:'Please Check The Crediantals'})
      }
    }
  }
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login Form</CardTitle>
        <CardDescription>For Testing purspose only (email - test@test.com, password - Test@123)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Email</Label>
          <Input onChange={handleChange} id="name" placeholder="Enter Your Email Please" value={formInp.email} name="email"/>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Password</Label>
          <Input onChange={handleChange} id="name" placeholder="Enter Your Password Please" value={formInp.password} name="password"/>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleClick}>
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
