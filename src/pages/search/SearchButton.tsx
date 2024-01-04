import React from 'react'
type props = {
    action: Function
}
export const SearchButton: React.FC<props> = ({action}) => {
  return (
    <div onClick={() =>{
        action()
    }} className='w-[20.5rem] h-[5.25rem] rounded-[0.375rem] bg-[#172554] flex justify-center items-center trans
                    font-Sansation text-[#FFD029] text-[1.875rem] mt-[2.96rem] cursor-pointer hover:text-[#ffffff] hover:bg-[#293b76] trans'>
        SEARCH
    </div>
  )
}
