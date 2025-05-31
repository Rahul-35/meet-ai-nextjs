"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView=()=> {

  const {data:session}=authClient.useSession();
  const router=useRouter();

  if(!session){
    return(
      <h2>Loading......</h2>
    )
  }

  return(
    <div className="p-4 flex flex-col gap-y-4">
      <h1>The user: {session.user.name} with {session.user.email} has successfully logged in!!</h1>
      <Button onClick={()=>{authClient.signOut({fetchOptions:{
        onSuccess:()=>router.push("/sign-in")
        }})}}>Log Out</Button>
    </div>)
}
