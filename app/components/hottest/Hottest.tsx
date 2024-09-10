'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Hottestcard from '../hottestcard/Hottestcard'

export default function Hottest() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative px-6 pt-12 lg:px-8">
   
        <div className="mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 lg:px-8">
          <div className="max-w-3xl text-left mb-5">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Explore the hottest events
            </h1>
            <p className="mt-1 text-1xl leading-2 text-gray-600">
              These are the most popular events happening right now. Don't miss out!
            </p>

          </div>
          <div className="flex flex-col md:flex-row sm:flex-col gap-5 mb-[70px]">
            <Hottestcard />
            <Hottestcard />
            <Hottestcard />
            <Hottestcard />
            <Hottestcard />
          </div>
          <hr className="mt-10" />

        </div>
      </div>
    </div>
  )
}
