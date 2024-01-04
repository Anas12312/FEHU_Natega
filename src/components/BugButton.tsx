import React from 'react'

export default function BugButton() {
    return (
        <div className='bg-[#740000] bg-opacity-70 fixed left-0 -ml-[10.5rem] bottom-14 rounded-r-[0.4375rem] w-[14rem] h-[3.5rem]
            hover:-ml-0 hover:transition-all hover:ease-out
            font-Sansation-Bold text-white flex justify-start px-5 text-lg items-center select-none hover:cursor-pointer duration-300 ease-out'>
            <img className='w-[2.5625rem] h-[2.5rem] absolute right-[0.55rem] top-[0.5rem]'
                src='./../../../single_grade/bug2.png' />
            Report A Problem
        </div>
    )
}
