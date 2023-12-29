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
                        <img className='w-20' src="../../../public/logo2.png" alt="" />
                    </div>
                    <div className='z-30'>
                        <div className='text-gray-200 text-[3.2rem] font-bold mb-5'>
                            FEHU Natega.
                        </div>
                        <div className='text-gray-300 text-xl'>
                            Welcome to FEHU Grades where you can get your grades easily and fast, <br></br> 
                            compare it to your colleges and view analysis of your entire batch's grades
                        </div>
                        <div className='text-white flex justify-center items-center 
                              text-2xl font-bold bg-sky-600
                              w-96 h-20 mt-6 rounded-lg hover:bg-sky-800
                              hover:cursor-pointer trans'
                            onClick={() => {
                                nav('/signup')
                            }}>
                            Get Your Grades
                        </div>
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
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://www.facebook.com/profile.php?id=100095030204990') }}>Portfolio</div>
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
