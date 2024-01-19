/* eslint-disable @next/next/no-img-element */
'use server'
import React from 'react'
import { LoginForm } from '@/app/_components'
import { BeURL } from '@/lib/Config'
import { BlockIfLogin, BlockIfNotLogin } from '@/lib/ServerAction'


export default async function Signin(): Promise<JSX.Element> {
  
  await BlockIfLogin()

  return (
    <div id='login'>
      <div className='mx-auto md:my-8 py-28 px-10 max-w-[800px] bg-white border 
                      shadow-sm rounded-lg flex flex-col justify-center items-center gap-2'>
        <img src="/assets/images/wooz-logo.svg" alt="logo" className='h-20' />
        <p className='font-bold text-2xl'>Login</p>
        <LoginForm BeURL={BeURL} />
      </div>
    </div>
  )
}