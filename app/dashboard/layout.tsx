import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    
    <div>

        <div className='md:w-full'>
          <Header/>
        {children}
        </div>
     
    </div>
  )
}

export default layout
