import React from 'react';
import Image from 'next/image'
import Hero from '../../../public/Heroimg.png'


const Announcement: React.FC = () => {
  return (
    <div className="relative w-[865.013px] h-[208px] flex-shrink-0">
      <Image src={Hero} alt="Announcement" className="absolute inset-0 w-full h-full object-cover" />
      <div className='flex flex-col absolute bottom-5 left-7 text-black'>
      <h1 className='font-bold text-2xl'>Good Morning User!</h1>
      <p className=''>April 22, 2024 | 11:11 a.m.</p>
      </div>
    </div>
  );
};

export default Announcement;
