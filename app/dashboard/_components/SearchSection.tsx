
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
<div className='bg-black'>
    <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto">
    <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6">
      <div className="max-md:order-1 max-md:text-center">
        <p className="mt-4 text-sm font-bold text-blue-600"><span className="rotate-90 inline-block mr-2 mb-2">|</span> ALL IN ONE</p>
        <h2 className="text-white md:text-5xl text-2xl font-extrabold mb-4 md:!leading-[55px]">High-Quality AI Content Generator</h2>
        <p className="mt-5 text-base text-gray-600 leading-relaxed">Create high-quality content at scale with our powerful AI writing assistant.</p>
      </div>

      <div className="md:h-[400px] p-2">
        <img src="https://readymadeui.com/management-img.webp" className="w-full h-full object-contain rounded-lg" alt="Dining Experience" />
      </div>
    </div>

  </div>
 
  </div>
  )
}

export default SearchSection
