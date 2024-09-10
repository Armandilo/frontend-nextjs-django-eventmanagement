"use client";
import React from 'react'
import Header from '../components/header/Header'

import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import EventCards from '../components/eventCards/EventCards'
import EventsHeader from '../components/eventsHeader/EventsHeader'
import Pagination from '../components/pagination/Pagination'
import { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import DashboardTable from '../components/table/DashboardTable';

export type EventType = {
    id: string;
    title: string;
    description: string;
    state: string;
    price: number;
    image_url?: string;


}


const EventsPage = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const getEvents = async () => {
    const url = "/api/event";
    const tmpEvents = await apiService.get(url);
    setEvents(tmpEvents.data);
  };

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <main className=''>
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="relative px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 lg:px-8">  
        <div className="mx-auto max-w-8xl mb-10">
            <EventsHeader/>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white">
      <div className="relative px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 lg:px-8">  
        <div className="mx-auto max-w-8xl mb-10">
            <div className='mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {events.map((event) => {
                  return (
                    <EventCards key={event.id} event={event}/>
                    
                  )
                })}
                {events.map((event) => {
                  return (
                    <EventCards key={event.id} event={event}/>
                    
                  )
                })}
            </div>
            <div className="mt-8">
              <Pagination/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
 
    </main>
  )
}

export default EventsPage