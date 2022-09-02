import React from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { BiBell } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import Profile from '../../assets/profile.jpeg';

import Header from './Header';

const Dashboard = () => {
  return (
    <div>
      <div className='flex flex-grid w-auto h-12 justify-center items-center mt-12 font-mulish'>
        <p className='text-3xl font-bold pl-6'>Dashboard</p>
        <div className='flex flex-grid pl-28 font-medium ml-64'>
          <FiSearch className='text-2xl cursor-pointer' />
          <p className='text-zinc-400 ml-4'>Search</p>
        </div>
        <div className='bg-blck w-10 h-10 flex justify-center items-center rounded-full ml-64'>
          <BiBell className='text-lg cursor-pointer' />
        </div>
        <div className='flex flex-row ml-5'>
          <Image
            src={Profile}
            alt='Profile picture'
            height={50}
            width={50}
            className='rounded-full'
          />
          <div className='ml-3'>
            <div className='flex flex-row'>
              <p className='font-semibold'>Doctor Smith</p>
              <p className='cursor-pointer m-1'>
                <IoIosArrowDown />
              </p>
            </div>
            <p className='text-zinc-400 text-xs'>Product Manager</p>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Dashboard;
