import React from 'react'

export default function Title({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
    return (
        <div className={`flex flex-col justify-center text-center w-full space-y-2 md:space-y-4 mb-12 ${className}`}>
            <h3 data-animation="text" className='text-primary-dark dark:text-primary-light text-2xl md:text-4xl lg:text-5xl'>{title}</h3>
            <p data-animation="text" className='text-secondary-dark dark:text-secondary-light-text mx-auto w-full text-base sm:text-lg lg:max-w-3xl'>{subtitle}</p>
        </div>
    )
}
