import React from 'react'
type props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}
const TextField : React.FC<props>  = ({value, setValue})=> {
    return (
        <input 
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}
            className='ml-[1rem] w-[16.125rem] h-[2.25rem] bg-white pl-2 border border-[#989696] rounded-[0.375rem]' 
        />
            
      )
}
export default TextField
