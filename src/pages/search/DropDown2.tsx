import React from 'react'
type props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}
const DropDown2: React.FC<props> = ({value, setValue}) => {
    return (
        <select onChange={(e) => {
            setValue(e.target.value)
        }} className='w-[16.125rem] h-[2.25rem] px-1 bg-white border border-[#989696] rounded-[0.375rem]'
            value={value}>
            <option value="all">All Years</option>
            <option value="1">First</option>
            <option value="2">Second</option>
            <option value="3">Third</option>
            <option value="4">Fourth</option>
        </select>
      )
}
export default DropDown2
