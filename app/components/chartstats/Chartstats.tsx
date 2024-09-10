'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Hottestcard from '../hottestcard/Hottestcard'
import LineChart from '../charts/line/LineChart'

export default function Chartstats() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="relative px-6 pt-12 lg:px-8">
        <div className="mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 lg:px-8">
          <div className="max-w-3xl text-left mb-5">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Usage of events.com
            </h1>
          </div>
          <div className="w-full flex flex-wrap gap-0 sm:gap-6">
            <div className='flex-1 max-w-[420px] sm:max-w-[465px]'>
                <LineChart />
            </div>
            <div className='flex-1 max-w-[420px] sm:max-w-[465px]'>
                <LineChart />
            </div>
            <div className='flex-1 max-w-[420px] sm:max-w-[465px]'>
                <LineChart />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}