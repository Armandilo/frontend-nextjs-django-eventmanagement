"use client";
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
import { useState } from 'react';
  export default function EventsHeader() {

    const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
    const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
    const [selectedDateFilter, setSelectedDateFilter] = useState('Last 30 days');
    const [selectedStateFilter, setSelectedStateFilter] = useState('All');
  
    const toggleDateDropdown = () => {
      setIsDateDropdownOpen(!isDateDropdownOpen);
      setIsStateDropdownOpen(false);
    };
  
    const toggleStateDropdown = () => {
      setIsStateDropdownOpen(!isStateDropdownOpen);
      setIsDateDropdownOpen(false);
    };
  
    const handleDateFilterChange = (filter: string) => {
      setSelectedDateFilter(filter);
      setIsDateDropdownOpen(false);
    };
  
    const handleStateFilterChange = (filter: string) => {
      setSelectedStateFilter(filter);
      setIsStateDropdownOpen(false);
    };

    return (
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1 flex flex-row items-center gap-5">
          
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Events
          </h2>

          <div className="relative mr-2">
                <div className="absolute mt-2 inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="bg-white mt-2 ml-2 sm:ml-0 block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for events" />
            </div>
         
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:block">
                <div className='relative inline-block text-left'>
                  <button 
                    onClick={toggleStateDropdown}
                    className="group inline-flex items-center text-indigo-700 bg-white border border-indigo-700 focus:outline-none hover:bg-indigo-700 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    >
                      <svg className="w-4 h-4 text-indigo-700 dark:text-gray-400 me-1 group-hover:text-white" aria-hidden={true} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>

                      {selectedStateFilter}
                      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>

            {isStateDropdownOpen && (
                    <div className="overflow-y-auto max-h-[210px] absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 top-full left-0 sm:right-0 sm:left-auto mt-1" >
                      <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                        {['All', 'Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Putrajaya', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu'].map((filter) => (
                          <li key={filter}>
                            <div 
                              className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                              onClick={() => handleStateFilterChange(filter)}
                            >
                              <input
                                type="radio"
                                checked={selectedStateFilter === filter}
                                readOnly
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                {filter}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

             
         
          </span>
  
  
        </div>
      </div>
    )
  }