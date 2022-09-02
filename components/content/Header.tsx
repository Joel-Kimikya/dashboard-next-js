import React from 'react';
import { TbArrowBearRight } from 'react-icons/tb';
import { TbArrowDownRight } from 'react-icons/tb';

const Header = () => {
  return (
    <div>
      <div className='grid grid-cols-1 w-[58%] h-32 md:grid-cols-3 my-20 gap-5 ml-6'>
        <div className='bg-blck p-8 font-mulish text-sm'>
          <div className='flex flex-row items-center text-zinc-400'>
            <p>Total Earning </p>
            <p>
              <TbArrowBearRight className='ml-2' />
            </p>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='bg-black w-28 h-1 rounded-full'></div>
            <div className='bg-zinc-200 w-11 h-1 rounded-full'></div>
          </div>
          <p className='text-2xl font-bold font-mulish mt-5'>$12,495.00</p>
        </div>
        <div className='bg-blck p-8 font-mulish text-sm'>
          <div className='flex flex-row items-center text-zinc-400'>
            <p>Total Spending </p>
            <p>
              <TbArrowDownRight className='ml-2' />
            </p>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='bg-orange-400 w-16 h-1 rounded-full'></div>
            <div className='bg-zinc-200 w-24 h-1 rounded-full'></div>
          </div>
          <p className='text-2xl font-bold font-mulish mt-5'>$09,495.00</p>
        </div>
        <div className='bg-blck p-8 font-mulish text-sm'>
          <div className='flex flex-row items-center text-zinc-400'>
            <p>Goal This Month </p>
            <p>
              <TbArrowBearRight className='ml-2' />
            </p>
          </div>
          <div className='flex flex-row mt-2'>
            <div className='bg-teal-500 w-48 h-1 rounded-full'></div>
            <div className='bg-zinc-200 w-11 h-1 rounded-full'></div>
          </div>
          <p className='text-2xl font-bold font-mulish mt-5'>$24,435.00</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
