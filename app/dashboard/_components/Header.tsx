import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm border-b-2'>
      <div className='flex gap-2 items-center p-2 rounded-md max-w-md'>
      <Image src={"/logo.svg"} alt='logo' width={40} height={60}/>
     <h1 className='font-semibold font-sans gap-3 text-3xl text-blue-700 '>Filledii</h1>
      </div>
      <div>
<UserButton/>
      </div>
    </div>
  )
}

export default Header
