"use client";
import Login from "@/components/Login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Signup from "@/components/Signup";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const preToken = localStorage.getItem('token');
    if(preToken) router.push('/main');
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
      <h3 className="mt-2">Note - At first req time will require because of render free plan they close services when not in use you can read it - <Link href="https://community.render.com/t/web-service-stops-if-its-not-used-for-a-few-minutes/4692/2">here</Link></h3>
    </main>
  );
}
