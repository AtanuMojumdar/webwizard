import React from 'react'
import {InputWithButton} from '@/components/InputForm'
import {AlertDialogDemo} from '@/components/Info'

const Home = () => {
  return (
    <div>      
      <div className='scale-up-top'>
        <h1 className='font-bold text-center md:text-8xl text-6xl mt-36'><span className='text-sky-500'>Web</span>Wizard</h1>
        <p className='text-center text-sm mt-4 md:text-xl text-gray-400'><span className='underline underline-offset-2 decoration-sky-500'>Unlock the Web</span>: From Understanding to Creation</p>
      </div>
      <div className='mx-auto  w-[90%] flex gap-4 justify-center items-center md:w-fit mt-16'>
        <InputWithButton/>
        <AlertDialogDemo/>
      </div>
    </div>
  )
}
// Enter your email to get the contents and the registration link of the workshop.
export default Home