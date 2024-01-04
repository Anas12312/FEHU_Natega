import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
    const nav = useNavigate()
    return (
        <div className='w-full h-full flex flex-col justify-between items-center bg-[#172554]'>
            <div className='flex w-full h-full justify-start items-center overflow-hidden'>
                <div className='w-[10rem]'></div>
                <div className='text-white'>
                    <div className='z-30 hover:cursor-pointer absolute left-[10rem] top-10'
                        onClick={() => { nav('/') }}>
                        <img className='w-[4.6875rem] h-[2.6875rem]' src="../../../logo2.png" alt="logo" />
                    </div>
                    <div className='z-30'>
                        <div className='inline-block text-[4rem] font-Sansation-Bold'>FEHU</div>
                        <div className='inline-block text-[4rem] font-Sansation-Light ml-4'>NATEGA</div>

                        <div className='text-gray-300 text-[1.25rem] font-Sansation-Light mb-8 leading-5'>
                            Welcome to FEHU Grades<br />
                            where you can get your grades easily and fast,<br />
                            compare it to your colleges and view analysis<br />
                            of your entire batch's grades.
                        </div>

                        <div className='flex justify-between h-[5.125rem] w-[32rem] font-Sansation-Bold'>
                            <button onClick={() => {
                                nav('/search')
                            }} className='w-[15rem] rounded-[0.4375rem] bg-[#AC8601]
                                hover:bg-[#bb9200] hover:transition
                            '>
                                GET YOUR GRADES
                            </button>

                            <button onClick={() => {
                                nav('/home')
                            }} className='w-[15rem] bg-transparent border-white border-[3px] rounded-[0.4375rem]
                                hover:bg-white hover:text-black hover:transition-all 
                            '>
                                YOUR BATCH'S GRADES
                            </button>
                        </div>

                        <div className='mt-4 font-Sansation-Light text-[0.875rem] '>
                            Created By Anazz & Zyad
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='ml-[13.5rem] w-[30rem] flex justify-around items-start font-Sansation text-[1.25rem] text-[#F5F5F5]'>
                        <div className='flex-col '>
                            <img className='w-[7.1875rem] h-[7.1875rem] mb-7' src='../../../home/grades.png' />
                            <div>Get Your Grades</div>
                        </div>
                        <div className=''>
                            <img className='w-[7.1875rem] h-[7.1875rem] mb-7' src='../../../home/leaderboard2.png' />
                            <div className='w-[7.1875rem]'>Compare It To Your Colleges</div>
                        </div>
                        <div className=''>
                            <img className='w-[7.1875rem] h-[7.1875rem] mb-7' src='../../../home/analytics2.png' />
                            <div className='w-[7.1875rem]'>And View Your Batch's Analytics</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[10.25rem] bg-black bg-opacity-[30%] flex justify-start text-white
                          items-center font-Sansation-Bold'>
                <div className='w-[11%]'></div>
                <div className='h-full flex flex-col justify-start items-start'>
                    <div className='text-lg mt-[.75rem]'>Follow Us</div>
                    <div className='flex justify-start items-start'>
                        <div className='flex text-gray-300 mr-20'>
                            <div className='text-white mr-2'>Anazz</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://anazz.netlify.app') }}>Portfolio</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://github.com/Anas12312') }}>GitHub</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://www.linkedin.com/in/anas-hesham-87871a19a/') }}>LinkedIn</div>
                        </div>
                        <div className='flex text-gray-300'>
                            <div className='text-white mr-2'>Zyad</div>
                            <div className='z-30ٍ mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://www.facebook.com/profile.php?id=100095030204990') }}>Portfolio</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://github.com/zyad007') }}>GitHub</div>
                            <div className='z-30 mr-2 hover:cursor-pointer hover:text-white hover:underline' onClick={() => { window.open('https://www.linkedin.com/in/zyad-abdul-nasser-4977651b8/') }}>LinkedIn</div>
                        </div>
                    </div>
                </div>
                <div className='text-[1.375rem] absolute bottom-[1.5rem] right-[2.5rem]'>&copy; 2023 AZ</div>
                <div className='flex justify-center items-start absolute bottom-[.75rem] w-full'>
                    <div className='text-center font-Sansation-Light text-[0.625rem]'>
                        Disclaimer: This website is not affiliated with or endorsed by Helwan University. We provide independent information and are not an official representation of the university. Please consult the official <br />
                        Helwan University website for accurate and reliable information. We disclaim any liability for errors or damages resulting from the use of this website.
                    </div>
                </div>
            </div>
        </div>
    )
}
