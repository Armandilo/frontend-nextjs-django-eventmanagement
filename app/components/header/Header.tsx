import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
    PlusIcon,
  } from '@heroicons/react/20/solid'
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
  
  export default function Header() {
    return (
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h2>
         
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:block">
            <Link href="/add">
            <button
              type="button"
              className="group inline-flex items-center rounded-md border border-indigo-700 px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm  hover:bg-indigo-700 hover:text-white"
            >
              <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-indigo-700 group-hover:text-white" />
              Add
            </button>
            </Link>
          </span>
  
  
        </div>
      </div>
    )
  }