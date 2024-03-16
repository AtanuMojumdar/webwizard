"use client"
import React, { useEffect } from 'react'
import {AlertDialogDemo} from '@/components/Contact'

const Exit = () => {  
  return (
    <>
    <div className='text-center text-5xl font-bold mt-14'>Thank You<span className='text-sky-400'>!</span></div>
    <p className='text-center text-sm md:text-lg text-gray-400 mt-4'>Thanks for signing up. If you don&apos;t receive an email shortly, <span className='text-sky-400'>double check your spam box</span> 🙂! or try again.</p>
    <div className='mx-auto w-fit'>

    <AlertDialogDemo/>
    </div>
    </>
  )
}

export default Exit