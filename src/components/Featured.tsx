import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-blue'>
      {/* WRAPPER*/}
      <div className='w-max flex'>
        {/* SINGLE ITEM*/}
        <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
          {/* IMAGE CONTAINER*/}
          <div className='relative flex-1 w-full'>
            <Image src = "/temporary/p1.png" alt = " " fill className='object-contain' />
          </div>
          {/* TEXT CONTAINER*/}
          <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-xl font-bold uppercase'> Title </h1>
            <p> Description </p>
            <span className="text-xl font-bold"> $23 </span>  
            <button className="bg-blue text-white p-2 rounded-md" > Add to Cart </button>
            </div> 
          </div>
          </div>
    </div>
  )
}

export default Featured