"use client";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import apiService from '@/app/services/apiService';
export default function AddEvent() {

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('Conference');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState('');
  const [price, setPrice] = useState('0');
  const [eventmode, setEventMode] = useState('Physical');
  const [streetaddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Johor');
  const [zipcode, setPostalCode] = useState('');
  const [image, setDataImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const router = useRouter();
  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setDataImage(file);
      
      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }


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
    formData.append('image', image as Blob);

    const response = await apiService.post('/api/event/create/', formData);

    if (response.success) {
        console.log('SUCCESS :-D');
        router.push('/dashboard');

    } else {
        console.log('Error');

        const tmpErrors: string[] = Object.values(response).map((error: any) => {
            return error;
        })
    }

}

  return (
    <form onSubmit={submitForm}>
        <div className='flex flex-row'>
            <div className="flex-none w-1/3">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Event</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
                </p>
            </div>
        
      <div className="space-y-12 ml-10 flex-1">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Event Name
              </label>
              <div className="mt-2">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Write your event title"
                    autoComplete="title"
                    className=" block pl-[12px] flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                Organization Name
              </label>
              <div className="mt-2">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Hosting organization"
                    autoComplete="company"
                    className=" block pl-[12px] flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                  autoComplete="category-name"
                  value={category}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <div className="flex items-center bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <p className='ml-3 font-light text-sm leading-6 text-gray-900'>RM</p>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    defaultValue={0}
                    autoComplete="price"
                    className=" block pl-[8px] flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Describe your event'
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the event.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>

              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                   style={{
                     backgroundImage: imagePreview ? `url(${imagePreview})` : 'none',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     minHeight: '200px'
                   }}>
                {!imagePreview && (
                  <div className="text-center">
                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="image" name="image" type="file" accept='image/*' onChange={setImage} className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
              </div>
              {imagePreview && (
                <button
                  type="button"
                  onClick={() => {
                    setDataImage(null);
                    setImagePreview(null);
                  }}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  Remove image
                </button>
              )}
            </div>
          </div>
        </div>

        <div className=" border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Event Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Date of the event</p>
          <div className="sm:col-span-4 mt-4">
              <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">
                Date
              </label>
              <div className="mt-2">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-fit">
                  <input
                    id="start_date"
                    name="star_date"
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder="Date of the event"
                    autoComplete="username"
                    className=" block pl-[12px] flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

          <p className="mt-4   text-sm leading-6 text-gray-600">Location of the event</p>

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
                    checked={eventmode === 'Online'}
                    onChange={() => setEventMode('Online')}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="online" className="block text-sm font-medium leading-6 text-gray-900">
                    Online
                  </label>
                </div>
            </div>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                State
              </label>
              <div className="mt-2">
                <select
                  id="state"
                  name="state"
                  onChange={(e) => setState(e.target.value)}
                  disabled={eventmode === 'Online'}
                  autoComplete="state-name"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ${eventmode === 'Online' ? 'bg-gray-200' : ''}`}
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
            </div>

            <div className="col-span-full">
              <label htmlFor="streetaddress" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="streetaddress"
                  name="streetaddress"
                  onChange={(e) => setStreetAddress(e.target.value)}
                  disabled={eventmode === 'Online'}
                  type="text"
                  autoComplete="street-address"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${eventmode === 'Online' ? 'bg-gray-200' : ''}`}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                  disabled={eventmode === 'Online'}
                  type="text"
                  autoComplete="address-level2"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${eventmode === 'Online' ? 'bg-gray-200' : ''}`}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="zipcode" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="zipcode"
                  name="zipcode"
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="text"
                  autoComplete="postal-code"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${eventmode === 'Online' ? 'bg-gray-200' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>

        

      
      </div>
      </div>
      <hr />
      <div className="mt-6 flex items-center justify-end gap-x-6">
      
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={submitForm}
        >
          Save
        </button>
      </div>
    </form>
  )
}
