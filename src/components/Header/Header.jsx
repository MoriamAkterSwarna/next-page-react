import React, { useState } from 'react';
import { BoltIcon,Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 flex justify-between items-center p-5 mx-auto rounded sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            {/* logo */}
            <Link to='/' className='inline-flex items-center relative'>
                <BoltIcon className="h-8 w-8 text-blue-500" />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>NextPage</span>
            </Link>

            {/* navigation item */}
            <ul className='lg:flex space-x-8 items-center font-bold hidden'>
                <li>
                    <NavLink to='/' 
                    title='Home'
                    className={({isActive}) => (isActive ? 'active' : 'default:')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/books' className={({isActive}) => (isActive ? 'active' : 'default:')}>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : 'default:')}>About</NavLink>
                </li>
            </ul>

            {/* Mobile nav menu  */}
            
            <div className='lg:hidden'>
                        <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>

                    {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

            </div>
        </div>
    );
};

export default Header;