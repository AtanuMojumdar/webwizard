"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import validator from 'validator'
import axios from 'axios'
import { toast } from "react-toastify"
import {useRouter} from 'next/navigation';


export function InputWithButton() {
  const router = useRouter()
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState("")
  async function handleClick(e:any){
    e.preventDefault();
    try{
      if(email.length < 1){
        return;
      }
    if(email.length <= 5){
      toast.error("Invalid Email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log("Too Small");
      return;
    }
    else{
      const ans = validator.isEmail(email);
      if(!ans){
        toast.error("Invalid Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        return;
      }
      setLoading(true)
      const res = await axios.post('/api/register',{
        email
      });
      setEmail("")
      setLoading(false)
      localStorage.setItem('access',"true");
      router.push('/success/registration')

    }
  }
  catch(err){
    toast.error("Internal Server Error 400", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setLoading(false)
  }
  }
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input required={true} onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
      {!Loading && <Button onClick={handleClick}>Submit</Button>}
        {Loading &&  <Button disabled >Loading...</Button>}
    </div>
  )
}
