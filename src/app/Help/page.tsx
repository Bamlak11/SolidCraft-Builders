'use client'
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Help: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['About Us', 'ChatBot', 'FAQ', 'Helpful Resources', 'Customer Reviews'];

    return (
        <main className="bg-white">
            <Navbar />

            <div className='flex'>
                <Sidebar />

                <div className="flex flex-col w-full">
                    <div className="flex w-full h-[104px] p-10 justify-between items-center bg-[#2B2C30]">
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl text-white'>Help</h1>
                            <p className='text-white'>Get the information that you need</p>
                        </div>

                        <div className='flex bg-[#E8E9E0] rounded-2xl'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`flex p-4 justify-center items-center rounded-md 
                        ${activeTab === tab ? 'bg-white text-black' : 'bg-[#E8E9E0] text-black'}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='p-28'>

                        <div className="w-auto flex items-center mb-4 h-[45px] flex-shrink-0 rounded-[10px] bg-[#726750]">
                            <h1 className='px-8 font-semibold'>1. Getting Started</h1>
                        </div>
                        <div className='mb-10 pr-4'>
                            <p className='text-black ml-4'>
                                <strong>Q:</strong> How do I sign up for an account? <br />
                                <ul className='ml-8'>
                                    <li><strong>A:</strong> Signing up for an account is easy! Simply visit our website and click on the 'Sign Up' button. Follow the prompts to enter your information and create your account.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="w-auto flex items-center py-2 mb-4 h-[45px] flex-shrink-0 rounded-[10px] bg-[#726750]">
                            <h1 className='px-8 font-semibold'>2. Project Management</h1>
                        </div>
                        <div className='mb-10 pr-4'>
                            <p className='text-black ml-4 py-4'>
                                <strong>Q:</strong> How do I create a new project? <br />
                                <ul className='ml-8'>
                                    <li><strong>A:</strong> To create a new project, log in to your account and navigate to the 'Projects' section. Click on the 'New Project' button and fill out the required details such as project name, start date, end date, and budget.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="w-auto flex items-center py-2 mb-4 h-[45px] flex-shrink-0 rounded-[10px] bg-[#726750]">
                            <h1 className='px-8 font-semibold'>3. Security and Privacy</h1>
                        </div>
                        <div>
                            <p className='text-black ml-4 my-4'>
                                <strong>Q:</strong> Is my data secure on your platform? <br />
                                <ul className='ml-8'>
                                    <li><strong>A:</strong> Yes, we take security and privacy seriously. Our platform uses industry-standard encryption and security measures to protect your data.</li>
                                </ul>
                            </p>
                            <p className='text-black ml-4 my-4'>
                                <strong>Q:</strong> Can I export my data from the platform? <br />
                                <ul className='ml-8'>
                                    <li><strong>A:</strong> Yes, you can export your data from the platform at any time. We provide options for exporting project data, documents, and other information for your convenience.</li>
                                </ul>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default Help;
