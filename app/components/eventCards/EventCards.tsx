import  { EventType } from '../../events/page';
import Image from 'next/image';
import Link from 'next/link';
const products = [
    {
      id: 1,
      name: 'Healthcare Workshop',
      href: '/event',
      imageSrc: '/cardbanner.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'RM 35',
      color: 'lorem ipsum dolor sit amet',
    },
    // More products...
  ]

  interface EventProps {
    event: EventType;
  }
  
    const EventCards: React.FC<EventProps> = ({event}) => {

      console.log(event.image_url);
    return (
          <>
          <Link href={`event/${event.id}`}>
              <div key={event.id} className="group relative border rounded-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-tl-md rounded-tr-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[180px]">
                  <Image className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    src={event?.image_url || '/cardbanner.jpg'}
                    alt={event.title}
                    width={200}
                    height={200}/>
                </div>
                <div className="mt-1 flex justify-between p-5">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {event.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">{event.description.substring(0,100)}...</p>
                    <p className="mt-1 text-sm text-gray-700 flex flex-row gap-1 items-center">                      
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden={true} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    {event.state}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">RM{event.price}</p>
                </div>
              </div>
            </Link>
          </>

    )
  }
  
  
  export default EventCards