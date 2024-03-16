"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'
import {AlertDialogDemo} from '@/components/Contact'


const Exit = () => {
  const access = localStorage.getItem('access');
  console.log(access);



  useEffect(() => {
  
    return () => {
      if(localStorage.getItem('access')){
        localStorage.removeItem('access')
      }
    }
  }, [])
  




  if(!access){
    return (
      <div className='text-center flex flex-col gap-6'>
    <div className='text-center text-5xl font-bold mt-14'>Something went wrong<span className='text-red-500'>!</span></div>
    <Link className='underline underline-offset-2 text-gray-200 decoration-sky-500' href='/'>Go back</Link>
    </div>
    );
    
  }
  

  
  
  
  return (
    <>
    <div className='text-center text-5xl font-bold mt-14'>Thank You!</div>
    <p className='text-center text-sm md:text-lg text-gray-400 mt-4'>Thanks for signing up. If you don&apos;t receive an email shortly, double check your spam box 🙂! or try again.</p>
    <div className='mx-auto w-fit'>

    <AlertDialogDemo/>
    </div>
    </>
  )
}

export default Exit