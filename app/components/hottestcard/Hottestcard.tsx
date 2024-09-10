import React from 'react'
import Image from 'next/image'

const Hottestcard = () => {
  return (
    <a href="#" className="flex flex-col bg-white border border-gray-200 rounded-xl lg:flex-col xl:flex-row sm:w-full md:max-w-md hover:bg-gray-100 overflow-hidden group relative">
      <Image src="/photography.jpg" className="object-cover w-full rounded-t-lg h-54 sm:h-68 md:h-auto md:w-auto md:rounded-none " alt="Event 1" width={100} height={100} />
      <div className="flex flex-col p-4 justify-center leading-normal relative md:flex-grow">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 md:mb-2">Noteworthy</h5>
        <p className="mb-1 text-sm font-normal text-gray-700 transition-transform duration-200 ease-in-out transform translate-y-0 group-hover:translate-y-20 md:mb-2">Photography's event</p>
        <div className="flex items-center transition-transform duration-200 ease-in-out transform translate-y-0 group-hover:translate-y-0 sm:mb-5 absolute bottom-4">
          <p className="mb-1 text-sm font-normal text-indigo-500 opacity-0 group-hover:opacity-100">Click to explore</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-indigo-500 ml-1 mb-1 absolute top-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </a>
  )
}

export default Hottestcard