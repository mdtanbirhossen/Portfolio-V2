import React from 'react'
import { MdConstruction } from "react-icons/md";

export default function UnderConstruction() {
    return (
        <div className='flex flex-col gap-2 items-center justify-center min-h-[calc(100vh-168px)] px-1 py-3 text-center font-medium text-primary-dark dark:text-primary-light'>
            <MdConstruction className='text-7xl md:text-8xl lg:text-9xl' />
            <h3 className='text-lg sm:text-xl md:text-3xl lg:text-4xl'>This page is under construction</h3>
        </div>
    )
}
