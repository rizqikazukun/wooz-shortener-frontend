'use server'
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export async function Footer(): Promise<JSX.Element> {
    return (
        <footer className='container mx-auto p-10 mt-10 flex flex-wrap gap-5 max-lg:justify-center 
                            lg:justify-between items-center rounded-t-lg bg-white border max-w-[1200px]'>
            <img className=" h-14" src="/assets/images/wooz-logo.svg" alt="logo" />
            <p className='font-medium text-center'>
                Wooz is a Test Base Project. Build by Rizqi Pratama. ©2024
            </p>
            <img className=" h-14" src="/assets/images/rizqipratama-logo.svg" alt="logo" />
        </footer>
    )
}
