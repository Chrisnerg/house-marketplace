import React from 'react'
import HeroSecondary from '@/components/components_custom/HeroSecondary';
import { FiHome } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";

const SellPage = () => {
  return (
    <div>
        <HeroSecondary bg_color={"bg-purple-700"} title={"Sell Your Property"} description={"List your property and reach thousands of potential buyers"}/>
        <div className='flex justify-around bg-purple-50 py-4'>
            <div className='flex gap-2 items-center'>
                <div className='bg-purple-200 rounded-md p-2'>
                    <FiHome className="text-4xl text-purple-700 " />
                </div>
                <div>
                    <p className='font-semibold'>Free Listing</p>
                    <span className='text-xs text-gray-500'>List your property for free and reach millions of buyers</span>
                </div>
            </div>

            <div className='flex gap-2 items-center'>
                <div className='bg-purple-200 rounded-md p-2'>
                    <FaDollarSign className="text-4xl text-purple-700 " />
                </div>
                <div>
                    <p className='font-semibold'>Free Listing</p>
                    <span className='text-xs text-gray-500'>List your property for free and reach millions of buyers</span>
                </div>
            </div>

            <div className='flex gap-2 items-center'>
               <div className='bg-purple-200 rounded-md p-2'>
                    <GoLocation className="text-4xl text-purple-700 " />
                </div>
                <div>
                    <p className='font-semibold'>Free Listing</p>
                    <span className='text-xs text-gray-500'>List your property for free and reach millions of buyers</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellPage