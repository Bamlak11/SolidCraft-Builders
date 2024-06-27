"use client"
import Link from 'next/link';
import { FC, useState } from 'react';
import Image from 'next/image'
import logo from '../../../public/Logo.png'
import Modal from './Modal';
import ProjectForm from './ProjectForm';

const Navbar: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex w-full p-2 justify-between items-center bg-[#E8E9E0]">
     <div className='pl-4'>
        <Link href="/" className="flex items-center">
            <Image src={logo} alt="SolidCraft Builders Logo" className="h-[76] w-[76px] mr-2" />
        </Link>
      </div>

      <div className="flex text-black space-x-4">
            {/* search */}
        <div className="flex items-center bg-white text-black px-20 py-2 rounded-md">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent outline-none"
          />
        </div>
        
        {/* SVG icons as links */}
        <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.668457 6.78788C0.668457 3.07546 3.74392 0 7.45633 0H25.8806C29.593 0 32.6684 3.07546 32.6684 6.78788V18.5859C32.6684 22.2983 29.593 25.3737 25.8806 25.3737H13.921C12.4087 25.3737 11.1113 25.784 10.1068 26.5374L10.0896 26.5501L2.97852 31.7218C2.53607 32.0436 1.95048 32.0899 1.46296 31.8416C0.975442 31.5934 0.668457 31.0925 0.668457 30.5454V6.78788ZM3.57755 27.6891L8.37035 24.2034C9.9501 23.0219 11.8815 22.4646 13.921 22.4646H25.8806C27.9863 22.4646 29.7594 20.6916 29.7594 18.5859V6.78788C29.7594 4.68211 27.9863 2.90909 25.8806 2.90909H7.45633C5.35057 2.90909 3.57755 4.68211 3.57755 6.78788V27.6891Z" fill="black"/>
        </svg>
        </Link>

        <Link href="/notification" className="px-3 py-2 rounded-md text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6116 3.2C11.2452 3.2 6.9971 7.35586 6.9971 12.2839V17.5484C6.9971 17.8662 6.90245 18.1768 6.72523 18.4406L4.12476 22.3116L4.10754 22.3367C3.80831 22.7643 3.84108 23.1547 3.99552 23.4356C4.15602 23.7275 4.50687 24 5.07204 24H28.3137C28.7211 24 29.1158 23.7576 29.3362 23.3651C29.5467 22.9902 29.515 22.6492 29.3173 22.3902C29.3069 22.3766 29.2968 22.3628 29.2868 22.3489L26.5238 18.4779C26.3302 18.2066 26.2261 17.8817 26.2261 17.5484V12.2839C26.2261 9.81089 25.13 7.44706 23.4946 5.87698C21.6359 4.25148 19.2475 3.2 16.6116 3.2ZM3.7971 12.2839C3.7971 5.44414 9.62581 0 16.6116 0C20.1404 0 23.2686 1.41675 25.6321 3.49528C25.6481 3.50931 25.6638 3.52367 25.6792 3.53833C27.9319 5.6845 29.4261 8.88443 29.4261 12.2839V17.0359L31.8782 20.4713C32.9622 21.9112 32.8467 23.6488 32.1265 24.9317C31.4123 26.2037 30.0192 27.2 28.3137 27.2H5.07204C1.61254 27.2 -0.609356 23.5167 1.4762 20.5157L3.7971 17.0609V12.2839ZM10.2801 30.4C10.2801 29.5163 10.9964 28.8 11.8801 28.8H21.4801C22.3638 28.8 23.0801 29.5163 23.0801 30.4C23.0801 31.2837 22.3638 32 21.4801 32H11.8801C10.9964 32 10.2801 31.2837 10.2801 30.4Z" fill="black"/>
        </svg>
        </Link>


        {/* Account Dropdown */}
        <div className='flex'>
        <Link href="/account" className="px-3 py-2 rounded-md text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M16.6799 0C7.87993 0 0.679932 7.2 0.679932 16C0.679932 20.16 2.27993 24.16 5.31993 27.2L5.47993 27.36C7.39993 29.12 9.63993 30.56 12.0399 31.36C13.6399 31.84 15.2399 32 16.8399 32C18.4399 32 20.0399 31.68 21.6399 31.36C24.0399 30.56 26.2799 29.28 28.1999 27.52L28.3599 27.36C31.2399 24.32 32.9999 20.32 32.9999 16.16C32.6799 7.2 25.4799 0 16.6799 0ZM16.6799 3.2C23.7199 3.2 29.4799 8.96 29.4799 16C29.4799 18.72 28.6799 21.28 27.0799 23.36C25.7999 21.28 23.8799 19.84 21.6399 18.88C22.7599 17.6 23.5599 16 23.5599 14.08C23.5599 10.24 20.5199 7.2 16.6799 7.2C12.8399 7.2 9.79993 10.24 9.79993 14.08C9.79993 16 10.5999 17.6 11.7199 18.88C9.47993 19.84 7.71993 21.44 6.27993 23.36C4.67993 21.28 3.87993 18.56 3.87993 16C3.87993 8.96 9.63993 3.2 16.6799 3.2Z" fill="black"/>
          </svg>
          </Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="items-center pr-3 py-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path d="M5.86464 5.61134C5.66713 5.82186 5.33287 5.82186 5.13536 5.61134L0.660892 0.842105C0.361339 0.522819 0.587726 9.97693e-07 1.02553 9.59418e-07L9.97446 1.77078e-07C10.4123 1.38804e-07 10.6387 0.522819 10.3391 0.842106L5.86464 5.61134Z" fill="#777777"/>
          </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <Link href="/account/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
              <Link href="/account/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</Link>
            </div>
          )}
        </div>

        </div>

        {/* Button */}
        <div className='pr-4'>
          <button  onClick={() => setIsModalOpen(true)} className="flex bg-[#C1934F] px-2 border border-black py-2 rounded-md text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
            <path d="M3.49121 18.4H5.99121C7.29121 18.4 8.49121 17.9 9.39121 17L19.6912 6.7C21.1912 5.2 21.1912 2.7 19.6912 1.2C18.9912 0.4 17.9912 0 16.9912 0C15.9912 0 14.9912 0.4 14.1912 1.1L3.89121 11.5C2.99121 12.4 2.49121 13.7 2.49121 15V17.5C2.49121 18 2.99121 18.4 3.49121 18.4ZM4.49121 14.9C4.49121 14.1 4.79121 13.4 5.29121 12.9L13.4912 4.7L14.8912 6C15.0912 6.2 15.3912 6.3 15.5912 6.3C15.8912 6.3 16.0912 6.2 16.2912 6C16.6912 5.6 16.6912 5 16.2912 4.6L14.8912 3.2L15.5912 2.5C15.9912 2.2 16.4912 2 16.9912 2C17.4912 2 17.9912 2.2 18.2912 2.6C18.9912 3.3 18.9912 4.6 18.2912 5.3L7.99121 15.6C7.49121 16.1 6.69121 16.4 5.99121 16.4H4.49121V14.9Z" fill="black"/>
            <path d="M21.6912 20H1.69116C1.09116 20 0.691162 20.4 0.691162 21C0.691162 21.6 1.09116 22 1.69116 22H21.6912C22.2912 22 22.6912 21.6 22.6912 21C22.6912 20.4 22.2912 20 21.6912 20Z" fill="black"/>
          </svg>
            <p className='px-4 font-semibold'>New Project</p>
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ProjectForm />
            </Modal>

      </div>
    </nav>
  );
};

export default Navbar;
