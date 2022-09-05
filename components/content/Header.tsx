import React from 'react';
import { TbArrowBearRight } from 'react-icons/tb';
import { TbArrowDownRight } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';
import { RiMenu5Fill } from 'react-icons/ri';

const Header = () => {
  return (
    <div>
      <div className='grid grid-cols-1 w-[58%] h-32 md:grid-cols-3 my-20 gap-5 ml-6'>
        <div className='bg-blck p-8 font-mulish text-sm rounded-xl'>
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
        <div className='bg-blck p-8 font-mulish text-sm rounded-xl'>
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
        <div className='bg-blck p-8 font-mulish text-sm rounded-xl'>
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
      <div>
        <div className='flex w-[58%] h-72 bg-blck rounded-xl ml-6 -mt-7'></div>
      </div>
      <div>
        <div className='flex flex-row ml-6 mt-24 h-auto w-[58%] justify-between'>
          <p className='font-mulish text-2xl font-bold'>New Invoice</p>
          <div className='flex flex-row items-center space-x-3 cursor-pointer'>
            <p className='bg-blck w-9 h-9 p-3 rounded-md'>
              <FiSearch />
            </p>
            <p className='bg-blck w-9 h-9 p-3 rounded-md'>
              <RiMenu5Fill />
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-row ml-6 h-auto w-[58%] font-mulish text-[11px] font-bold text-zinc-400 justify-between pr-9 mt-8'>
          <p>INVOICE NAME</p>
          <p>INVOICE ID</p>
          <p className='pl-9'>DATE</p>
          <p>AMOUNT</p>
        </div>
        <div className='flex flex-row m-5 h-[1px] w-[58%] justify-between bg-gray-200'></div>
        <div className='flex flex-row ml-6 h-auto w-[58%] font-mulish text-[13px] font-bold text-black justify-between pr-9 mt-8'>
          <p>Mailchimp Support</p>
          <p className='pl-2'>Invoices V12-347596</p>
          <p>28-02-22</p>
          <p>$320,00</p>
        </div>
        <div className='flex flex-row m-5 h-[1px] w-[58%] justify-between bg-gray-200'></div>
        <div className='flex flex-row ml-6 h-auto w-[58%] font-mulish text-[13px] font-bold text-black justify-between pr-9 mt-8'>
          <p>Cash Withdrawal</p>
          <p className='pl-3'>Invoices V13-547891</p>
          <p>14-04-22</p>
          <p>$220,00</p>
        </div>
        <div className='flex flex-row m-5 h-[1px] w-[58%] justify-between bg-gray-200'></div>
        <div className='flex flex-row ml-6 h-auto w-[58%] font-mulish text-[13px] font-bold text-black justify-between pr-9 mt-8'>
          <p>Ronald Gmbh</p>
          <p className='pl-9'>Invoices V14-904900</p>
          <p>05-06-22</p>
          <p>$490,00</p>
        </div>
        <div className='flex flex-row m-5 h-[1px] w-[58%] justify-between bg-gray-200'></div>
      </div>
    </div>
  );
};

export default Header;
