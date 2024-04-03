import React from 'react'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({subsets: ['latin'], weight: '400', variable: '--font-pacifico'})


export default function ImgAndQuote() {
    return (
        <div>
            <img src="/assets/sideimg.jpeg" alt="image of 2 cute animals" className='relative h-screen' />
            <div className='absolute top-24 left-14'>
                <h1 className="font-bold text-2xl">Reliable care for your pets,</h1>
                <h2 className="font-bold text-xl">peace of mind for you.</h2>
            </div>

        </div>
    )
}
