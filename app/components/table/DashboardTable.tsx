"use client";
import React, { useEffect, useState } from 'react';
import Edit from '../editDialog/Edit';
import Pagination from '../pagination/Pagination';
import apiService from '@/app/services/apiService';
import { getUserId } from '@/app/lib/actions';

interface EventType {
    id: string;
    title: string;
    category: string;
    description: string;
    state: string;
    price: number;
    image_url?: string;
}

const DashboardTable = () => {

const [userId, setUserId] = useState<string | null>(null); 

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

  const [open,setOpen] = useState<string | null>(null);

  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserIdAndEvents = async () => {
      try {
        const id = await getUserId();
        setUserId(id);
        if (id) {
          const url = `/api/event/?user_id=${id}`;
          const response = await apiService.get(url);
          setEvents(response.data);
        }
      } catch (error) {
        console.error("Error:", error);
       
      } finally {
        setLoading(false);
      }
    };

    fetchUserIdAndEvents();
  }, []);

  return (
    <div className="relative overflow-x-auto border border-gray-100 shadow-md rounded-lg sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <div className="relative mt-2 ml-2">
                <div className="flex flex-row gap-5">
                  {/* Filter Dates */}
                  <button
                    onClick={toggleDateDropdown}
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                      <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                      </svg>
                      {selectedDateFilter}
                      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg>
                  </button>
                  {isDateDropdownOpen && (
                    <div className="top-[40px] max-h-[200px] overflow-y-auto absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                        {['Last day', 'Last 7 days', 'Last 30 days', 'Last month', 'Last year'].map((filter) => (
                          <li key={filter}>
                            <div 
                              className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                              onClick={() => handleDateFilterChange(filter)}
                            >
                              <input
                                type="radio"
                                checked={selectedDateFilter === filter}
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
                  {/* Filter States */}
                  <button 
                    onClick={toggleStateDropdown}
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 me-3" aria-hidden={true} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                      {selectedStateFilter}
                      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg>
                  </button>
                  {isStateDropdownOpen && (
                    <div className="overflow-y-auto max-h-[210px] absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 top-[40px]" style={{left: '150px'}}>
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
            </div>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mr-2">
                <div className="absolute mt-2 inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="mt-2 ml-2 sm:ml-0 block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for events" />
            </div>
        </div>
        {loading ? <p>Loading...</p> : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Event name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Location
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>

                {events.map((event) => {

                return (<tr key={event.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {event.title}
                    </th>
                    <td className="px-6 py-4">
                        {event.state}
                    </td>
                    <td className="px-6 py-4">
                        {event.category}
                    </td>
                    <td className="px-6 py-4">
                        RM {event.price}
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3"
                      onClick={() => setOpen(event.id)}
                      >
                        Edit
                        </a>
                        {events.map((event) =>(
                          open == event.id && <Edit open={true} setOpen={() => setOpen(null)} key={event.id} event={event}/>   
                        ))}
                    </td>
                </tr>)
                })}

                {/* You can add more table rows here */}
            </tbody>
        </table>
        )}
        <Pagination/>
    </div>
  );
}

export default DashboardTable;