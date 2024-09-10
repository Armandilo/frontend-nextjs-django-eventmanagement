"use client";

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-50">
      <div className="relative px-6 pt-12 lg:px-8">
   
        <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 py-22 sm:py-19 lg:py-34 lg:px-8">
          <div className="hidden sm:mb-4 sm:flex">
            <h1 className="text-base font-semibold leading-tight text-indigo-700 sm:text-lg">MALAYSIA'S EVENTS HUB</h1>
          </div>
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Data to enrich your event management
            </h1>
            <p className="mt-6 text-1xl leading-2 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 flex items-center justify-left gap-x-6 pb-10">
              <a
                href="#"
                className="rounded-md gap-2 flex justify-center bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Discover <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
