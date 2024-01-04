import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BugButton from '../../components/BugButton'
import CopyRight from '../../components/CopyRight'
import PlainNavBar from '../../components/PlainNavBar'

interface Record {
    courseName: string,
    grade: number,
    percentage: number,
    avg: number,
    rank: number
}

interface Total {
    grade: number,
    percentage: number,
    avg: number,
    rank: number
}

interface StudentData {
    name: string,
    nameAr: string,
    studentId: number,
    department: string,
    year: string,
    rank: number
}

export default function SingleGrade() {

    const { id } = useParams();

    const [studnetData, _] = useState<StudentData>({
        studentId: 242210024,
        name: 'Anas Hesham Mohamed El-Sayed',
        nameAr: 'أنس هشام محمد السيد',
        department: 'Computer',
        year: 'Third',
        rank: 12
    })

    const [total, _1] = useState<Total>({
        grade: 750,
        percentage: 100,
        avg: 750,
        rank: 1
    });
    
    const [records, _2] = useState<Record[]>([
        {
            courseName: 'Test',
            grade: 150,
            percentage: 100,
            avg: 150,
            rank: 100
        }, {
            courseName: 'Test',
            grade: 150,
            percentage: 100,
            avg: 150,
            rank: 100
        }, {
            courseName: 'Test',
            grade: 150,
            percentage: 100,
            avg: 150,
            rank: 100
        }, {
            courseName: 'Test',
            grade: 150,
            percentage: 100,
            avg: 150,
            rank: 100
        }, {
            courseName: 'Test',
            grade: 150,
            percentage: 100,
            avg: 150,
            rank: 100
        }, {
            courseName: 'Test',
            grade: 150,
            percentage: 100,
            avg: 150,
            rank: 100
        }
    ]);


    return (
        <div className='h-screen w-screen flex-col justify-start items-center'>

            <PlainNavBar />
            <div className='bg-white h-[calc(100%-4rem)] flex justify-center items-start'>

                <div className='flex-col justify-center items-center w-[70rem] rounded-[0.5rem]'>

                    <div className='w-full h-[3.125rem] my-[1rem]
                    flex justify-between items-center'>

                        <div className='w-[49%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
                            <input className='name-field font-Sansation-Bold text-[1.25rem] w-full' value={studnetData.name} disabled />
                            <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Name</label>
                        </div>

                        <div className='w-[49%] h-full relative flex justify-end pr-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
                            <input className='font-Sansation-Bold font-bold text-[1.35rem] text-right w-full' value={studnetData.nameAr} disabled />
                            <label className='name-field-outline-right font-serif text-[1.26rem]'>الاسم</label>
                        </div>
                    </div>

                    <div className='w-full h-[3.125rem] my-[1rem]
                    flex justify-between items-center'>
                        <div className='w-[23.5%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
                            <input className='name-field font-Sansation-Bold text-[1.25rem]' value={studnetData.studentId} disabled />
                            <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Student ID</label>
                        </div>
                        <div className='w-[23.5%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
                            <input className='name-field font-Sansation-Bold text-[1.25rem]' value={studnetData.department} disabled />
                            <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Department</label>
                        </div>
                        <div className='w-[23.5%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
                            <input className='name-field font-Sansation-Bold text-[1.25rem]' value={studnetData.year} disabled />
                            <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Year</label>
                        </div>
                        <div className='w-[23.5%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
                            <input className='name-field font-Sansation-Bold text-[1.25rem]' value={'#'+studnetData.rank} disabled />
                            <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Rank</label>
                        </div>
                    </div>

                    <div className='shadow-md rounded-[0.375rem] border'>
                        <div className='bg-[#ECECEC] w-full h-[4rem] rounded-t-[0.375rem] flex justify-between items-center px-[2.5rem]
                    font-Sansation-Bold text-[1.25rem] border-b border-b-black border-opacity-5'>
                            <div className='w-[20%]'>Course Name</div>
                            <div className='w-[20%] text-center'>Grade</div>
                            <div className='w-[20%] text-center'>Percentage</div>
                            <div className='w-[20%] text-center'>Batch Avg</div>
                            <div className='w-[20%] text-center'>Rank</div>
                        </div>

                        {
                            records.map(record => {
                                return (
                                    <div className='bg-[#B4B2B2] bg-opacity-10 w-full h-[3.375rem] border-b border-black border-opacity-30 
                                last:border-b-0 last:rounded-b-[0.375rem] flex justify-between items-center px-[2.5rem] font-Sansation-Bold 
                                text-[1rem] text-[#686666]'>
                                        <div className='w-[20%]'>{record.courseName}</div>
                                        <div className='w-[20%] text-[1.25rem] text-center'>{record.grade}</div>
                                        <div className='w-[20%] text-[1.25rem] text-center'>{record.percentage}%</div>
                                        <div className='w-[20%] text-[1.25rem] text-center'>{record.avg}</div>
                                        <div className='w-[20%] text-[1.25rem] text-center'>#{record.rank}</div>
                                    </div>
                                )
                            })
                        }
                        <div className='bg-[#B4B2B2] bg-opacity-10 w-full h-[4rem] border-b border-black border-opacity-30 
                                last:border-b-0 rounded-b-[0.375rem] flex justify-between items-center px-[2.5rem] font-Sansation-Bold 
                                text-[1rem] text-[#686666]'>
                            <div className='w-[20%] text-[1.25rem]'>Total</div>
                            <div className='w-[20%] text-center text-[1.25rem]'>{total.grade}</div>
                            <div className='w-[20%] text-center text-[1.25rem]'>{total.percentage}%</div>
                            <div className='w-[20%] text-center text-[1.25rem]'>{total.avg}</div>
                            <div className='w-[20%] text-center text-[1.25rem]'>#{total.rank}</div>
                        </div>
                    </div>
                </div>

            </div>
            <BugButton />
            <CopyRight />
        </div>
    )
}
