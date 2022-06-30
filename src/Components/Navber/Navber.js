import React from 'react';
import './Navber.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';




const navigation = [
  { name: 'HOME', href: '/home', current: true },
  { name: 'Add  a new  service', href: '/addingservice', current: false },
  { name: 'Manage All Order', href: '/manageorder', current: false },
  { name: 'about us', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navber = () => {
  
  const { logOut, user } = useAuth();
  
 
  return (
    <Disclosure as="nav" className="bg-gray-500  no-underline">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <NavLink to='/home' className='hidden hidden sm:hidden lg:block lg:h-auto lg:w-auto  lg:text-black  lg:font-iris lg:text-4xl no-underline lg:p-5'>Haven Holidays</NavLink> */}
                  
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">


                    <NavLink className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline' to='/home'>HOME</NavLink>
                    <NavLink className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline' to='/addingservice'>ADD SERViCE</NavLink>
                    <NavLink className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline' to='/manageorder'>Manage Orders</NavLink>
                    <NavLink className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline' to='/about*'>About Us</NavLink>
                    


                  





                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              {user?.displayName?<h1 className='text-sm text-white'>{user.displayName}</h1>:<></>}

                {/* Profile dropdown */}
                {user?.email ? <Menu as="div" className="ml-3 relative">
                  
                  <div> 
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">

                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/profile"
                            className={classNames(active ? 'bg-gray-100 no-underline' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button  onClick={logOut}
                           
                            className={classNames(active ? 'bg-gray-100 no-underline ' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline mx-auto')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>:<NavLink className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded no-underline' to='/signin'>log in</NavLink>}
              </div>
            </div>
          </div>


         

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}




    </Disclosure>
  );
};

export default Navber;






/*  */