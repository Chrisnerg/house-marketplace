import React from 'react'
import HeroSecondary from '@/components/components_custom/HeroSecondary';
import { FiHome } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { Upload, DollarSign, Home, MapPin, Bed, Bath } from 'lucide-react';

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

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="mb-6">Property Details</h2>
          
          <form className="space-y-6 [&_input]:bg-transparent [&_select]:bg-transparent [&_textarea]:bg-transparent">
            {/* Property Type & Listing Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="propertyType" className="block text-sm mb-2 text-gray-700">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div>
                <label htmlFor="listingType" className="block text-sm mb-2 text-gray-700">
                  Listing Type
                </label>
                <select
                  id="listingType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm mb-2 text-gray-700">
                Property Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="e.g., Beautiful 3 Bedroom House"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm mb-2 text-gray-700">
                Street Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="123 Main Street"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* City, State, ZIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm mb-2 text-gray-700">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm mb-2 text-gray-700">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="State"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm mb-2 text-gray-700">
                  ZIP Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="ZIP"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm mb-2 text-gray-700">
                sale
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="price"
                  type="number"
                  placeholder='500 000'
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Bedrooms, Bathrooms, Square Feet */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="bedrooms" className="block text-sm mb-2 text-gray-700">
                  Bedrooms
                </label>
                <div className="relative">
                  <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="bedrooms"
                    type="number"
                    placeholder="3"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="bathrooms" className="block text-sm mb-2 text-gray-700">
                  Bathrooms
                </label>
                <div className="relative">
                  <Bath className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="bathrooms"
                    type="number"
                    step="0.5"
                    placeholder="2"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sqft" className="block text-sm mb-2 text-gray-700">
                  Square Feet
                </label>
                <input
                  id="sqft"
                  type="number"
                  placeholder="2,000"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Year Built & Lot Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="yearBuilt" className="block text-sm mb-2 text-gray-700">
                  Year Built
                </label>
                <input
                  id="yearBuilt"
                  type="number"
                  placeholder="2020"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="lotSize" className="block text-sm mb-2 text-gray-700">
                  Lot Size (sq ft)
                </label>
                <input
                  id="lotSize"
                  type="number"
                  placeholder="5,000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm mb-2 text-gray-700">
                Property Description
              </label>
              <textarea
                id="description"
                placeholder="Describe your property, its features, and what makes it special..."
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Property Photos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB (up to 20 photos)</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Submit Listing
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="mb-4">What happens next?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">1</span>
              <span>Your listing will be reviewed by our team within 24 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">2</span>
              <span>Once approved, your property will be live on our marketplace</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">3</span>
              <span>You'll receive notifications when buyers show interest</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default SellPage