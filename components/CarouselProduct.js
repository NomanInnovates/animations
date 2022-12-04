import Link from 'next/link'
import React from 'react'

export default function CarouselProduct() {
  return (
    <div className='w-full h-full bg-black flex items-center justify-between p-10 gap-10 flex-col lg:flex-row relative overflow-hidden'>
                <img src='/assets/iphone14.png' className=' absolute lg:-right-20 left-1/2 -translate-x-1/2 lg:translate-x-0 top-1/2 lg:-translate-y-1/2 transform' />
                <div className='w-full h-full bg-black/60 absolute inset-0' />
        <div className='relative'>
            <h1 className='font-bold lg:text-2xl text-xl text-white'>iPhone 14 pro Max</h1>
            <p className='text-white/90 text-base lg:text-base'>Apply today and save on iPhone, iPad, Apple Watch, Mac, and more through December 25.</p>
            <Link href="/product">
            <button className='border border-white px-4 font-normal py-2 text-white uppercase mt-8 text-base'>Buy Now</button>
            </Link>
        </div>


    </div>
  )
}
