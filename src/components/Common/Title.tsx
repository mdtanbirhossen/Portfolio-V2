import React from 'react'

export default function Title({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
    return (
        <div className={`${className}`}>
            <h3 className='text-primary-dark dark:text-primary-light'></h3>
            <p className='text-secondary-dark dark:text-secondary-light-text'></p>
        </div>
    )
}
