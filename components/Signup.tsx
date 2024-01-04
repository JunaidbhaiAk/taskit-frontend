import React, { useState } from 'react'
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
import { addUser } from '@/lib/auth.api';
import { useToast } from "@/components/ui/use-toast"
const Signup = () => {
  
  const { toast } = useToast()
  const [formInp,setFormInp] = useState({email:'',password:'',cpassword:''});
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormInp({...formInp,[e.target.name]:e.target.value})
  }
  const handleClick = async () => {
    const {email,password,cpassword} = formInp;
    if(email.length !== 0 && password.length !== 0 && cpassword.length !== 0){
      if(!validator.isEmail(formInp.email)){
        toast({
          description:'Enter Correct Email Address'
        })
        return;
      } 
      if(!validator.isStrongPassword(formInp.password,{minLength:8,minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
        toast({
          title: "Enter Strong Password",
          description:'Atleast 1 small case,1 uppercase,1 symbol,1number & min 8 length'
        })
        return;
      } 
      if(password !== cpassword){
        console.log('Enter Correct Password in Both Fields');
        toast({
          description: "Password Not Matches with other One",
        })
        return;
      } 
      const data = await addUser({email,password})
      if(data?.status === 200){
        toast({
          description: "User Added Successfully",
        })
        setFormInp({email:'',password:'',cpassword:''});
      }else console.log(data?.data); 
    }
    else toast({
      description:'Fill All Fields'
    })
  }
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Signup Form</CardTitle>
        <CardDescription>Create Your Account to use Task manager</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input onChange={handleChange} id="email" placeholder="Enter Your Email Please" name='email' value={formInp.email}/>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input onChange={handleChange} id="password" placeholder="Enter Your Password Please" name='password' value={formInp.password}/>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="cpassword">Confirm Password</Label>
          <Input onChange={handleChange} id="cpassword" placeholder="Enter Your Password Once Again Please" name='cpassword' value={formInp.cpassword}/>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleClick}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Signup