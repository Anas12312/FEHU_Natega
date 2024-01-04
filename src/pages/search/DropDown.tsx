import React from 'react'
type props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}
const DropDown: React.FC<props> = ({value, setValue}) => {
    return (
        <select onChange={(e) => {
            setValue(e.target.value)
        }} className='w-[16.125rem] h-[2.25rem] px-1 bg-white border border-[#989696] rounded-[0.375rem]'
        value={value}>
            <option value="all">All Departments</option>
            <option value="biomedical">Biomedical</option>
            <option value="civil">Civil</option>
            <option value="computer">Computer</option>
            <option value="communication">Communication</option>
            <option value="power">Power</option>
            <option value="mechanical">Automobile</option>
            <option value="automobile">Mechanical</option>
            <option value="architecture">Architecture</option>
            <option value="mecha-power">Mecha Power</option>
        </select>
      )
}
export default DropDown
