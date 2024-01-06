import React from 'react'
import { useNavigate } from 'react-router-dom'

interface DepartmentProps {
    imgUrl: string,
    name: string,
    dep: string
}

export default function DepartmentCard(props: DepartmentProps) {
    const nav = useNavigate()
    return (
        <div className={`relative w-full h-[9rem] bg-white shadow-md flex justify-center items-center bg-cover rounded-[0.3125rem] group`}
            style={{backgroundImage: `url('../../departments/${props.imgUrl}')`}}
        >
            <div className="absolute top-[calc(50%-1.75rem)] left-[calc(50%-7.5rem)] bg-[#172554] flex justify-center items-center w-[15rem] h-[3.5rem] rounded-[0.625rem] select-none">
                {props.name}
            </div>

            <div className="w-full h-full z-0 opacity-0 group-hover:opacity-100 group-hover:transition duration-300 ease-out
                                    flex justify-center items-center space-x-2
                                ">
                <div className="w-full h-full bg-[#FFD029] bg-opacity-80 transition flex justify-center items-center
                                     text-white text-[1.875rem] select-none hover:cursor-pointer group">
                    <div onClick={()=>{nav(`/batch/${props.dep}/1`)}} className="bg-[#172554] w-[3rem] h-[3rem] rounded-md flex justify-center items-center 
                                        hover:bg-[#293764]">
                        1
                    </div>
                </div>
                <div className="w-full h-full bg-[#FFD029] bg-opacity-80 transition flex justify-center items-center
                                     text-white text-[1.875rem] select-none hover:cursor-pointer group">
                    <div onClick={()=>{nav(`/batch/${props.dep}/2`)}} className="bg-[#172554] w-[3rem] h-[3rem] rounded-md flex justify-center items-center 
                                        hover:bg-[#293764]">
                        2
                    </div>
                </div>
                <div className="w-full h-full bg-[#FFD029] bg-opacity-80 transition flex justify-center items-center
                                     text-white text-[1.875rem] select-none hover:cursor-pointer group">
                    <div onClick={()=>{nav(`/batch/${props.dep}/3`)}} className="bg-[#172554] w-[3rem] h-[3rem] rounded-md flex justify-center items-center 
                                        hover:bg-[#293764]">
                        3
                    </div>
                </div>
                <div className="w-full h-full bg-[#FFD029] bg-opacity-80 transition flex justify-center items-center
                                     text-white text-[1.875rem] select-none hover:cursor-pointer group">
                    <div onClick={()=>{nav(`/batch/${props.dep}/4`)}} className="bg-[#172554] w-[3rem] h-[3rem] rounded-md flex justify-center items-center 
                                        hover:bg-[#293764]">
                        4
                    </div>
                </div>

            </div>
        </div>
    )
}
