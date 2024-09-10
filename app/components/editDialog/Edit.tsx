'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Dispatch, SetStateAction } from 'react'
import apiService from '@/app/services/apiService';
import { useRouter } from 'next/navigation';

interface EditProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    event: any;
}

export default function Edit({ open, setOpen,event }: EditProps) {
  const router = useRouter();
  const eventId = event.id;

  const submitForm = async (event:React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('company', company);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('start_date', start_date);
    formData.append('streetaddress', streetaddress);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zipcode', zipcode);
    formData.append('price', price);
    formData.append('eventmode', eventmode);


    const response = await apiService.put(`/api/event/${eventId}/update/`, formData);

    if (response.success) {
        console.log('SUCCESS :-D');
        window.location.reload();

    } else {
        console.log('Error');

        const tmpErrors: string[] = Object.values(response).map((error: any) => {
            return error;
        })
    }

}

const submitDelete = async (event:React.FormEvent) => {
  event.preventDefault();

  const response = await apiService.delete(`/api/event/${eventId}/delete/`);

  if (response.success) {
      console.log('SUCCESS :-D');
      window.location.reload();

  } else {
      console.log('Error');

      const tmpErrors: string[] = Object.values(response).map((error: any) => {
          return error;
      })
  }

}

 

  const [title, setTitle] = useState(event.title);
  const [company, setCompany] = useState(event.company);
  const [category, setCategory] = useState(event.category);
  const [description, setDescription] = useState(event.description);
  const [start_date, setStartDate] = useState(event.start_date);
  const [price, setPrice] = useState(event.price);
  const [eventmode, setEventMode] = useState(event.eventmode);
  const [streetaddress, setStreetAddress] = useState(event.streetaddress);
  const [city, setCity] = useState(event.city);
  const [state, setState] = useState(event.state);
  const [zipcode, setPostalCode] = useState(event.zipcode);

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="text-center sm:text-left">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900 flex flex-row gap-2 items-center">
                  Update Event
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>

                </DialogTitle>
                <div className="mt-2">
                  <form onSubmit={submitForm}>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-4 sm:mb-5">
                      <div className="sm:col-span-2">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Event Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Type event title"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Organizer"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          placeholder="RM 299"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Category
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="Conference">Conference</option>
                          <option value="Workshop">Workshop</option>
                          <option value="Seminar">Seminar</option>
                          <option value="Webinar">Webinar</option>
                          <option value="Meetup">Meetup</option>
                          <option value="Networking">Networking</option>
                          <option value="Panel Discussion">Panel Discussion</option>
                          <option value="Training">Training</option>
                          <option value="Exhibition">Exhibition</option>
                          <option value="Hackathon">Hackathon</option>
                          <option value="Concert">Concert</option>
                          <option value="Festival">Festival</option>
                          <option value="Fundraiser">Fundraiser</option>
                          <option value="Product Launch">Product Launch</option>
                          <option value="Trade Show">Trade Show</option>
                          <option value="Job_Fair">Job Fair</option>
                          <option value="Competition">Competition</option>
                          <option value="Lecture">Lecture</option>
                          <option value="Symposium">Symposium</option>
                          <option value="Retreat">Retreat</option>
                          <option value="Round Table">Round Table</option>
                          <option value="Social Event">Social Event</option>
                          <option value="Workshop Series">Workshop Series</option>
                          <option value="Sports Event">Sports Event</option>
                        </select>
                      </div>

                      <div className="w-full">
                          <label htmlFor="eventmode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Event Mode
                          </label>
                          <div className="mt-4 flex flex-row items-center gap-x-3">
                          <div className='flex flex-row items-center gap-x-3'>
                          <input
                              id="physical"
                              name="physical"
                              checked={eventmode === 'Physical'}
                              onChange={() => setEventMode('Physical')}
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="physical" className="block text-sm font-medium leading-6 text-gray-900">
                              Physical
                            </label>
                          </div>

                          <div className='flex flex-row items-center gap-x-3'>
                          <input
                              id="online"
                              name="online"
                              type="radio"
                              checked={eventmode === 'Online'}
                              onChange={() => setEventMode('Online')}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="online" className="block text-sm font-medium leading-6 text-gray-900">
                              Online
                            </label>
                          </div>

                          </div>
                
                      </div>

                      <div className="w-full">
                        <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Event Date
                        </label>
                        <input
                          type="date"
                          name="start_date"
                          id="start_date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={start_date.split('T')[0]}
                          placeholder="Event Date"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          State
                        </label>
                        <select
                          id="state"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          disabled={eventmode === 'Online'}
                        >
                          <option value="Johor">Johor</option>
                          <option value="Kedah">Kedah</option>
                          <option value="Kelantan">Kelantan</option>
                          <option value="Melaka">Melaka</option>
                          <option value="Negeri Sembilan">Negeri Sembilan</option>
                          <option value="Pahang">Pahang</option>
                          <option value="Perak">Perak</option>
                          <option value="Perlis">Perlis</option>
                          <option value="Penang">Penang</option>
                          <option value="Sabah">Sabah</option>
                          <option value="Sarawak">Sarawak</option>
                          <option value="Selangor">Selangor</option>
                          <option value="Terengganu">Terengganu</option>
                          <option value="Kuala Lumpur">Kuala Lumpur</option>
                          <option value="Labuan">Labuan</option>
                          <option value="Putrajaya">Putrajaya</option>
                        </select>
                      </div>

                        <div className="w-full">
                        <label htmlFor="streetaddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Street Address
                        </label>
                        <input
                          type="text"
                          name="streetaddress"
                          id="streetaddress"
                          onChange={(e) => setStreetAddress(e.target.value)}
                          disabled={eventmode === 'Online'}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={streetaddress}
                          placeholder="Street Address"
                          required
                        />
                      </div>
                     
                      <div className="w-full">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          onChange={(e) => setCity(e.target.value)}
                          disabled={eventmode === 'Online'}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={city}
                          placeholder="City"
                          required
                        />
                      </div> 

                      <div className="w-full">
                        <label htmlFor="zipcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Zip Code/Postal Code
                        </label>
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          onChange={(e) => setPostalCode(e.target.value)}
                          disabled={eventmode === 'Online'}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={zipcode}
                          placeholder="Zip Code/Postal Code"
                          required
                        />
                      </div> 
                      <div className="sm:col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Event Description
                        </label>
                        <textarea
                          id="description"
                          rows={8}
                          onChange={(e) => setDescription(e.target.value)}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Write a product description here..."
                          value={description}
                        >
                          
                        </textarea>
                      </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <div className="flex space-x-4">
                            <button
                            type="button"
                            onClick={submitDelete}
                            className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                            <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Delete
                            </button>
                            <button
                            type="submit"
                            className="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                            <svg className="w-5 h-5 mr-1 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                            Update Event
                            </button>
                       
                        </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
