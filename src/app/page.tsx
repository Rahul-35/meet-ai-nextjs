"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";

export default function Home() {

  const {data:session} = authClient.useSession();
  const onSubmit=()=>{
     authClient.signUp.email({
      email,
      password,
      name,
    },
    {
      onError: (ctx)=>{ window.alert(ctx.error.message)},
      onSuccess: ()=>{window.alert("Sucess")}
    },
  );
  }


  const onSignIN = ()=>{  authClient.signIn.email({
      
        email,
        password,
        rememberMe: false
}, {
    onError:(ctx)=>{window.alert(ctx.error.message)},
    onSuccess:()=>{window.alert("User successfully logged in!!")}
})
  }

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  if(session){
    return(
    <div className="p-4 flex flex-col gap-y-4">
      <h1>The user: {session.user.name} with {session.user.email} has successfully logged in!!</h1>
      <Button onClick={()=>{authClient.signOut();}}>Log Out</Button>
    </div>)
  }

  return (
  <div className="flex flex-col p-4 gap-y-4">
   <div className="p-4 flex flex-col gap-y-4">
    <Input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Input placeholder="password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
    <Button onClick={onSubmit}>Create User</Button>
    <Button onClick={onSignIN}>Log In</Button>
   </div>
   </div>  
  );
}
