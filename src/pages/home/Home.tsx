import React from "react";
import BugButton from "../../components/BugButton";
import CopyRight from "../../components/CopyRight";
import PlainNavBar from "../../components/PlainNavBar";
import DepartmentCard from "../../components/DepartmentCard";

const Home: React.FC = () => {

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

                    <div className="w-full h-[3.125rem] my-[1rem] bg-[#172554] rounded-[0.3125rem] flex justify-center items-center
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

                            <DepartmentCard imgUrl='car.jpg' name="AUTOMOBILE" />
                            <DepartmentCard imgUrl='computer.jpg' name="COMPUTER" />
                            <DepartmentCard imgUrl='mechanical.jpg' name="MECHANICAL" />

                        </div>

                        <div className="flex justify-between items-center space-x-3">

                            <DepartmentCard imgUrl='architecture.jpg' name="ARCHITECTURE" />
                            <DepartmentCard imgUrl='civil.jpg' name="CIVIL" />
                            <DepartmentCard imgUrl='biomedical.jpg' name="BIOMEDICAL" />

                        </div>

                        <div className="flex justify-between items-center space-x-3">

                            <DepartmentCard imgUrl='power.jpg' name="PORWER" />
                            <DepartmentCard imgUrl='mechanical_power.jpg' name="MECHA POWER" />
                            <DepartmentCard imgUrl='communication.jpg' name="COMMUNICATION" />

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