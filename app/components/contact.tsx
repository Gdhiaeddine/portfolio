import React from 'react'
import { lato, playfair } from '../font'
import FormContact from './form'

export default function Contact() {
  return (
    <div className='mb-2 max-w-11/12 mx-auto'>
      <div className='flex flex-col gap-2 items-center justify-center mb-4'>
        <h1 className={`${playfair.className} text-2xl`}>
          Contact Me
        </h1>
        <p className={`${lato.className} text-md max-w-150 text-center text-gray-500`}>
          Do you have a project in mind or want to know more about my services? Feel free to contact me, I'll get back to you as soon as possible.
        </p>
      </div>
      <div className='flex justify-center'>
        <FormContact />
      </div>
    </div>
  )
}

