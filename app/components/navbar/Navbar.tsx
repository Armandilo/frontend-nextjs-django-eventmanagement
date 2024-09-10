"use client";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect} from 'react'
import LoginDialog from '../loginDialog/LoginDialog';
import SignInDialog from '../signInDialog/SignInDialog';
import { getUserId } from '@/app/lib/actions';
import { resetAuthCookies } from '@/app/lib/actions';
import { useRouter } from 'next/navigation'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface NavbarProps {
  initialUserId: string | null;
}

const Navbar: React.FC<NavbarProps> = ({initialUserId}) => {

  

  const [userId, setUserId] = useState<string | null>(initialUserId);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Events', href: '/events', current: false },
    ...(userId ? [{ name: 'Dashboard', href: '/dashboard', current: false }] : [])
    
    ]

  const submitLogout = async () => {
    resetAuthCookies();
    setUserId(null);
    router.push('/');
    
  }
  const [open,setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white px-6 lg:px-8 border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto max-w-screen-2xl px-0 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-200 hover:text-gray-700',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           

            {/* Profile dropdown */}
            {userId ? (
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                  <span className="absolute  -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" onClick={submitLogout} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> ) : (
              <>
              <div className="flex flex-row gap-2 sm:ml-5">
                <button className="border border-indigo-700 hover:bg-indigo-600 hover:text-white text-indigo-700 font-semibold py-1 px-4 text-sm rounded" onClick={() => setOpen(true)}>Login</button>
                {open && <LoginDialog open={open} setOpen={setOpen} onSuccess={(id) => setUserId(id)}/>}   
                <button className="hidden sm:block bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-1 px-4 text-sm rounded" onClick={() => setSignInOpen(true)}>Register</button>
                {signInOpen && <SignInDialog open={signInOpen} setOpen={setSignInOpen} onSuccess={(id) => setUserId(id)} />}  
              </div>
              
              </>
              
            )}
            
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-200 hover:text-black',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar