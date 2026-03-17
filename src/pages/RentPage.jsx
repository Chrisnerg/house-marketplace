import React from 'react'
import HeroSecondary from '@/components/components_custom/HeroSecondary';
import Contents from '@/components/components_custom/Contents';
import { MdOutlineDateRange } from "react-icons/md";

const RentPage = () => {
  return (
    <div>
        <HeroSecondary bg_color={"bg-green-700"} title={"Rent a Home"} description={"Discover your next rental property"}/>
        <div className='flex gap-2 items-center justify-center text-green-600 bg-green-50 py-2'>
            <MdOutlineDateRange className='text-xl'/>
            <p>Most rentals require first month's rent and security deposit upfront</p>
        </div>
        <Contents title={"Properties for Rent"} description={"rentals available"}/>
    </div>
  )
}

export default RentPage