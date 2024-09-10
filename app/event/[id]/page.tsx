
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import apiService from '@/app/services/apiService';
import { getUserId } from '@/app/lib/actions';

const EventPage = async ({params} : {params: {id: string}}) => {
  const event = await apiService.get(`/api/event/${params.id}/`);
  const userId = await getUserId();

  return (
    <div className='mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 mt-10 lg:px-16'> 
    <div className="mx-auto max-w-8xl mb-10">
    <Breadcrumbs/>
      <div className="flex flex-col lg:flex-row mt-5">
        {/* Left Column - Image Gallery */}
        <div className="flex-1">
          <div className="w-full h-auto">
            <Image
              src="/poster2.png" // Update with actual image path
              alt="Main Image"
              width={700}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>

        </div>

        {/* Right Column - Product Details */}
        <div className="flex-1 lg:ml-12 mt-10 lg:mt-0">
          <h1 className="text-3xl font-semibold">{event.title}</h1>
          <p className="mt-2 text-gray-600">Universiti Sains Malaysia</p>
          <p className="text-2xl mt-2">RM 35.00</p>

          
          
          <div className="mt-6">
            <p className="text-sm text-gray-600 flex flex-row">Category
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1 text-gray-500 dark:text-gray-400 me-3">
            <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
            </svg>

            </p>
            <p className="text-base mt-2 text-gray-900">Health</p>
          </div>
          
          <div className="mt-6 flex flex-row gap-5">
            <div className=''>
                <p className="text-sm text-gray-600 flex flex-row">Date <svg className="w-5 h-5 ml-1 text-gray-500 dark:text-gray-400 me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                </svg>          
                </p>
                <p className="text-base mt-2 text-gray-900">13/09/2024</p>
            </div>
            <div>
                <p className="text-sm text-gray-600 flex flex-row">Location
                <svg className='w-5 h-5 ml-1 text-gray-500 dark:text-gray-400 me-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>
                </p>
                <p className="text-base mt-2 text-gray-900">Universiti Sains Malaysia, Jalan Universiti, 11700 Gelugor, Pulau Pinang</p>
            </div>
          </div>
          

          

          <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg">Sign Me In</button>

          <div className='mt-8 border rounded-lg p-4'>
          <div className="mt-2">
            <h3 className="text-lg font-medium">Description</h3>
            <p className="mt-2 text-gray-700">
              The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.
            </p>
            <p className="mt-2 text-gray-700">
              Looking to stock your closet? The Basic Tee also comes in a 3-pack or 5-pack at a bundle discount.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium">Fabric & Care</h3>
            <ul className="mt-2 list-disc ml-5 list-inside text-gray-500">
              <li>Only the best materials</li>
              <li>Ethically and locally made</li>
              <li>Pre-washed and pre-shrunk</li>
              <li>Machine wash cold with similar colors</li>
            </ul>
          </div>

          </div>

    
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventPage;
