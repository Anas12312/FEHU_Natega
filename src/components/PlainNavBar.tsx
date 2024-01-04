import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlainNavBar() {
    const nav = useNavigate()

    return (
        <div className='bg-[#172554] h-[4rem] w-full flex justify-center items-center'>
            <div className='w-[70rem] h-full'>
                <div onClick={() => {nav('/')}} className='h-full flex justify-start items-center space-x-2 select-none cursor-pointer'>
                    <div className='inline-block font-Sansation-Bold text-[#FFD029] text-[1.5rem]'>
                        FEHU
                    </div>
                    <div className='inline-block font-Sansation-Light text-white text-[1.5rem]'>
                        NATEGA
                    </div>
                </div>
            </div>
        </div>
    )
}
