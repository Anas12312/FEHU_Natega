import React from 'react'
import PlainNavBar from '../../components/PlainNavBar'
import BugButton from '../../components/BugButton'
import CopyRight from '../../components/CopyRight'

export default function NotFound() {
    return (
        <div className='w-screen h-screen flex-col justify-start items-center'>
            <PlainNavBar />

            <div className='h-[calc(100%-4rem)] flex justify-center items-start'>

                <div className='w-[70rem] h-full flex justify-center items-center
            font-Sansation-Bold'>
                    <div className='flex-col pb-12'>
                        <div className='text-8xl text-center' >
                            404
                        </div>
                        <div className='text-4xl text-center'>
                            Not Found
                        </div>
                    </div>
                </div>

            </div>

            <BugButton />
            <CopyRight />
        </div>
    )
}
