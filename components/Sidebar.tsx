import React from 'react';
// import Image from 'next/image';

import { TbFileInvoice } from 'react-icons/tb';
import { BiStats } from 'react-icons/bi';
import { MdOutlineStickyNote2 } from 'react-icons/md';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiOutlineLogout } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className='w-[20%] h-full p-5'>
      <Logo />
    </div>
  );
};

export default Sidebar;

const Logo = () => {
  return (
    <div>
      <div className='flex flex-row space-x-4 p-10'>
        <div className='text-white bg-black w-9 h-9 flex justify-center items-center rounded-t-full rounded-br-full'>
          <p className='font-semibold text-2xl pt-4'>P</p>
        </div>
        <div className='font-bold text-2xl'>
          <p>PSONO</p>
        </div>
      </div>
      <div className='flex flex-col space-y-8 font-semibold text-xl p-10 font-mulish'>
        <div className='flex flex-row space-x-5 items-center cursor-pointer'>
          <TbFileInvoice className='text-3xl' />
          <p>Invoices</p>
        </div>

        <div className='flex flex-row space-x-5 items-center bg-black text-white w-56 h-14 rounded-lg relative -m-6 cursor-pointer'>
          <BiStats className='text-3xl ml-6' />
          <p>Dashboard</p>
        </div>
        <div className='flex flex-row space-x-5 items-center cursor-pointer'>
          <MdOutlineStickyNote2 className='text-3xl' />
          <p>Estimates</p>
        </div>
        <div className='flex flex-row space-x-5 items-center  cursor-pointer'>
          <RiArrowUpDownFill className='text-3xl' />
          <p>Transection</p>
        </div>
        <div className='flex flex-row space-x-5 items-center cursor-pointer'>
          <MdProductionQuantityLimits className='text-3xl' />
          <p>Products</p>
        </div>
        <div className='flex flex-row space-x-5 items-center cursor-pointer'>
          <AiOutlineTeam className='text-3xl' />
          <p>My Team</p>
        </div>
        <div className='flex flex-row space-x-5 items-center cursor-pointer'>
          <FiSettings className='text-3xl' />
          <p>Settings</p>
        </div>
      </div>
      <div className='bg-blck w-56 h-60 flex relative m-5 mt-24 rounded-2xl'>
        <div className='bg-teal-800 w-3 h-3 rounded-full absolute ml-40 mt-6'></div>
        <div className='bg-stone-800 w-20 h-20 absolute m-6 rounded-tl-full z-20'></div>
        <div className='bg-teal-800 w-20 h-20 absolute ml-32 mt-14 rounded-bl-full z-10'></div>
        <div className='bg-choco w-11 h-11 absolute ml-24 mt-10 rounded-full'></div>
        <div className='bg-choco w-6 h-6 mt-20 ml-20 absolute rounded-tl-full z-20'></div>
        <div className='bg-orange-400 w-14 h-14 absolute mt-20 ml-20 rounded-full z-10'></div>
        <div className='font-semibold text-xl my-40 mx-6 font-mulish cursor-pointer'>
          <p>Upgrade</p>
          <p className='flex'>
            Your Plan <HiArrowNarrowRight className='text-3xl py-1' />
          </p>
        </div>
      </div>
      <div className='flex text-xl p-11 font-semibold '>
        <AiOutlineLogout className='m-1 mx-2' />
        <p className='cursor-pointer'>Log Out</p>
      </div>
    </div>
  );
};
