import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
    const nav = useNavigate()
    return (
        <div className='w-full h-full flex flex-col justify-between items-center an-1'>
            <div className='flex w-full h-full justify-start items-center'>
                <div className='w-[9%]'></div>
                <div className=''>
                    <div className='z-30 hover:cursor-pointer absolute left-[9%] top-10'
                        onClick={() => { nav(0) }}>
                        <img className='w-20' src="../../../logo2.png" alt="" />
                    </div>
                    <div className='z-30'>
                        <div className='text-gray-200 text-[3.2rem] font-bold mb-5'>
                            FEHU Natega.
                        </div>
                        <div className='text-gray-300 text-xl'>
                            Welcome to FEHU Grades where you can get your grades easily and fast, <br></br> 
                            compare it to your colleges and view analysis of your entire batch's grades.
                        </div>
                        <button className="mt-10 group relative min-h-[50px] w-80 font-bold text-xl overflow-hidden rounded-md border border-sky-700 bg-sky-500 text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                        <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/2 before:z-0 before:h-0 before:w-1/2 before:bg-white before:duration-500 after:absolute after:right-1/2 after:top-0 after:z-0 after:h-0 after:w-1/2 after:bg-white after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                        <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-sky-600">Get Your Grades</span>
                        </button>
                        <div className='mt-4 font-bold text-white'>
                            Created By Anazz & Zyad
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-40 bg-gray-600
                          bg-opacity-40 flex justify-start text-white
                          items-center'>
                <div className='w-[9%]'></div>
                <div className='h-full flex flex-col justify-center items-start'>
                    <div className='font-bold text-lg mt-2'>Follow Us</div>
                    <div className='flex justify-start items-start'>
                        <div className='flex text-gray-300 mr-20'>
                            <div className='font-bold text-white mr-2'>Anazz</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://anazz.netlify.app') }}>Portfolio</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://github.com/Anas12312') }}>GitHub</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://www.linkedin.com/in/anas-hesham-87871a19a/') }}>LinkedIn</div>
                        </div>
                        <div className='flex text-gray-300'>
                            <div className='font-bold text-white mr-2'>Zyad</div>
                            <div className='z-30ٍ mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://www.facebook.com/profile.php?id=100095030204990') }}>Portfolio</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://github.com/zyad007') }}>GitHub</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://www.linkedin.com/in/zyad-abdul-nasser-4977651b8/') }}>LinkedIn</div>
                        </div>
                    </div>
                </div>
                <div className='text-lg absolute right-32'>&copy; 2023 AZ</div>
            </div>
        </div>
    )
}
