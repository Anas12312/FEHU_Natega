import React from "react";
import BugButton from "../../components/BugButton";
import CopyRight from "../../components/CopyRight";
import PlainNavBar from "../../components/PlainNavBar";
import DepartmentCard from "../../components/DepartmentCard";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const nav = useNavigate()
    return (
        <div className="h-screen w-screen flex-col justify-start items-center">
            <PlainNavBar />

            <div className='bg-white h-[calc(100%-4rem)] flex justify-center items-start'>

                <div className='flex-col justify-center items-center w-[70rem] rounded-[0.5rem]'>

                    <div className='w-full h-[3.125rem] my-[1rem]
                    flex justify-between items-center'>
                        <div className="font-Sansation-Bold text-[1.75rem]">
                            Select Your Department And Year
                        </div>
                    </div>

                    <div onClick={()=>{nav('/batch/0/0')}} className="w-full h-[3.125rem] my-[1rem] bg-[#172554] rounded-[0.3125rem] flex justify-center items-center
                     text-[#FFD029] font-Sansation-Bold text-[1.5rem] hover:text-white hover:transition hover:cursor-pointer space-x-3
                     duration-300 ease-out">
                        <div>
                            PREPARATORY
                        </div>
                        <div>
                            إعدادي
                        </div>
                    </div>

                    <div className="w-full font-Sansation-Bold text-[#FFD029] text-[1.5rem] 
                    flex-col justify-center items-center space-y-3">
                        <div className="flex justify-between items-center space-x-3">

                            <DepartmentCard dep="1" imgUrl='car.jpg' name="AUTOMOBILE" />
                            <DepartmentCard dep="2" imgUrl='computer.jpg' name="COMPUTER" />
                            <DepartmentCard dep="3" imgUrl='mechanical.jpg' name="MECHANICAL" />

                        </div>

                        <div className="flex justify-between items-center space-x-3">

                            <DepartmentCard dep="4" imgUrl='architecture.jpg' name="ARCHITECTURE" />
                            <DepartmentCard dep="5" imgUrl='civil.jpg' name="CIVIL" />
                            <DepartmentCard dep="6" imgUrl='biomedical.jpg' name="BIOMEDICAL" />

                        </div>

                        <div className="flex justify-between items-center space-x-3">

                            <DepartmentCard dep="7" imgUrl='power.jpg' name="POWER" />
                            <DepartmentCard dep="8" imgUrl='mechanical_power.jpg' name="MECHA POWER" />
                            <DepartmentCard dep="9" imgUrl='communication.jpg' name="COMMUNICATION" />

                        </div>
                    </div>

                </div>

            </div>

            <BugButton />
            <CopyRight />
        </div>
    )

}


export default Home;