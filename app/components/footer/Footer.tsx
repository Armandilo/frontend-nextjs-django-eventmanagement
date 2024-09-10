"use client";

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-100">
        <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 py-22 sm:py-19 lg:py-34 lg:px-8">
                <div className="flex flex-row justify-between">
                    <div className="py-10">
                        <div className="flex flex-shrink-0 items-center gap-2">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            events.com
                            </h1>
                           
                        </div>
                        <p className="font-light text-sm text-gray-600">© 2024 events.com, Inc. All rights reserved.</p>
                       
                       
                    </div>
                    <div className='py-10 flex flex-row gap-8'>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-1xl font-semibold text-gray-900">Open Source</h1>
                            <a href="#" className="text-sm text-gray-600">Frontend Repo: NextJs</a>
                            <a href="#" className="text-sm text-gray-600">Backend Repo: Django</a>

                        </div>
                 
                    </div>
                </div>

        
            </div>
            
        </div>
    </div>
  )
}
