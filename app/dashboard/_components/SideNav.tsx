"use client"
import { FileClock, History, Home, Settings } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import React, { useEffect } from 'react'

const SideNav = () => {
    const MenuList=[
        {
            name:"Home",
            icon:Home,
            path:"/dashboard"
        },
        {
            name:"History",
            icon:FileClock,
            path:"/dashboard/history"
        },
        {
            name:"Setting",
            icon:Settings,
            path:"/dashboard/setting"
        },
    ]

    const path = usePathname();

    useEffect(()=>{
     console.log(path)
    },[])
  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
     <Image src={"/logo.svg"} alt='logo' width={40} height={60}/>
     <h1 className='font-semibold font-sans gap-3 text-4xl text-blue-700 '>Aprain</h1>
     </div>
     <hr className='my-6 border'/>
     <div className='mt-3'>
                {
                    MenuList.map((menu, index) => (
                       <div className={`flex gap-2 mb-2 p-3 hover:bg-pink-500 hover:text-white rounded-lg cursor-pointer font-bold items-center ${path==menu.path&&'bg-pink-600 text-white'}`}>
                         <menu.icon className='h-6 w-6'/>
                         <h2 className='text-lg'>{menu.name}</h2>
                       </div>
                    ))
                }
            </div>
    </div>
  )
}

export default SideNav
