import { useEffect, useState } from 'react'
import PlainNavBar from '../../components/PlainNavBar'
import BugButton from '../../components/BugButton'
import CopyRight from '../../components/CopyRight'
import TextField from './TextField'
import DropDown from './DropDown'
import DropDown2 from './DropDown2'
import { SearchButton } from './SearchButton'
import { useNavigate } from 'react-router-dom'
interface row {
    name: string,
    id: string,
    dep: string,
    year: string
}
export default function Search() {
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [dep, setDep] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [results, setResults] = useState<row[]>([]);
    const nav = useNavigate();
    function search(): void {
        console.log(name, id, dep, year)
        setResults([
            {
                name: "Anas Hesham Mohamed El Sayed",
                id: "24223021",
                dep: "Computer",
                year: "4"
            },
            {
                name: "Zyad Abdel Nasser El Sayed",
                id: "24223021",
                dep: "Communication",
                year: "4"
            },
            {
                name: "Anas Hatem Mohamed",
                id: "24223021",
                dep: "Communication",
                year: "4"
            },
            {
                name: "Luqman Youssef Taha",
                id: "24223021",
                dep: "Biomedical",
                year: "4"
            },
            {
                name: "Dina Ayoub Mohamed",
                id: "24223021",
                dep: "Computer",
                year: "4"
            },
            {
                name: "Roshdy Abdel Tawab Ali",
                id: "24223021",
                dep: "Computer",
                year: "4"
            },
            {
                name: "Mohamed Sayed Zakaria",
                id: "24223021",
                dep: "Computer",
                year: "4"
            },
            {
                name: "Adham Ehab Hussien Megahed",
                id: "24223021",
                dep: "Computer",
                year: "4"
            },
            {
                name: "Adham Ehab Hussien Megahed",
                id: "24223021",
                dep: "Computer",
                year: "4"
            }
        ])
    }
    useEffect(() => {
        search();
    },[])
  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center'>
        <PlainNavBar />
        <div className='h-[calc(100%-4rem] flex flex-col justify-center items-start pt-[2.69rem]'>
            <div className='font-Sansation-Bold text-[1.25rem]'>Search Your Grades By Name or Id</div>
            <div className='flex justify-center items-center mt-[2rem]'>
                <div className='w-[22.5rem] h-[29.6875rem] bg-[#f5f5f5] border border-[#989696] rounded-[0.375rem] px-[1rem]'>
                    <div className='flex w-full justify-between items-center pt-[1.13rem]'>
                        <div className='font-Sansation-Light text-[1.25rem]'>Name</div>
                        <TextField value={name} setValue={setName} />
                    </div>
                    <div className='flex w-full justify-between items-center pt-[1.13rem]'>
                        <div className='font-Sansation-Light text-[1.25rem]'>Id</div>
                        <TextField value={id} setValue={setId} />
                    </div>
                    <div className='flex w-full justify-between items-center pt-[1.13rem]'>
                        <div className='font-Sansation-Light text-[1.25rem]'>Dep</div>
                        <DropDown value={dep} setValue={setDep} />
                    </div>
                    <div className='flex w-full justify-between items-center pt-[1.13rem]'>
                        <div className='font-Sansation-Light text-[1.25rem]'>Year</div>
                        <DropDown2 value={year} setValue={setYear} />
                    </div>
                    <SearchButton action={search} />
                </div>
                <div className='w-[48.25rem] ml-[1.25rem] border border-[#989696] rounded-[0.375rem]'>
                    <div className='w-full h-[4.74256rem] bg-[#ececec] rounded-t-[0.375rem] flex just-center items-center'>
                        <div className='w-[50%] ml-[1rem] font-Sansation-Bold text-[1.25rem]'>Name</div>
                        <div className='w-[17%] ml-[1rem] font-Sansation-Bold text-[1.25rem] text-center'>Id</div>
                        <div className='w-[17%] ml-[1rem] font-Sansation-Bold text-[1.25rem] text-center'>Department</div>
                        <div className='w-[17%] ml-[1rem] font-Sansation-Bold text-[1.25rem] text-center'>Year</div>
                    </div>
                    <div className='w-full h-[24.9375rem] bg-[#f7f7f7] flex flex-col justify-start items-center rounded-b-[0.375rem] text-[1rem] text-[#989696] overflow-y-scroll'>
                        <div className='w-full'>
                            {results.map((row, index) => {
                                return (
                                    <div key={index} onClick={() => {
                                        nav('/grade/' + row.id)
                                    }} className='w-full h-[3.56rem] flex justify-start items-center border border-[#989696] hover:bg-[#ececec] cursor-pointer trans'>
                                        <div className='w-[50%]  ml-[1rem] font-Sansation-Light font-semibold'>{row.name}</div>
                                        <div className='w-[17%]  ml-[1rem] font-Sansation-Light font-semibold text-center'>{row.id}</div>
                                        <div className='w-[17%]  ml-[1rem] font-Sansation-Light font-semibold text-center'>{row.dep}</div>
                                        <div className='w-[17%]  ml-[1rem] font-Sansation-Light font-semibold text-center'>{row.year}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BugButton />
        <CopyRight />
    </div>
  )
}
