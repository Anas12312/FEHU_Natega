import { useParams } from 'react-router-dom'
import PlainNavBar from '../../components/PlainNavBar'
import React, { useEffect, useState } from 'react'

type Record = {
  name: string,
  id: number,
  sub1: number,
  sub2: number,
  sub3: number,
  sub4: number,
  sub5: number,
  sub6: number,
  total: number,
  precentage: number
}

type Sorters = {
  name: string,
  id: number,
  sub1: number,
  sub2: number,
  sub3: number,
  sub4: number,
  sub5: number,
  sub6: number,
  total: number,
  precentage: number
}

interface BatchInfo {
  department: string,
  year: string,
  term: string,
}

interface Subject {
  name: string,
  total: number
}

interface Header {
  sub1: Subject,
  sub2: Subject,
  sub3: Subject,
  sub4: Subject,
  sub5: Subject,
  sub6: Subject,
  total: number
}

enum Sorted {
  NO = 0,
  ASC = 1,
  DEC = -1
}

import SORT from '../../assets/sort.png'
import SORT_UP from '../../assets/sort-up.png'
import SORT_DOWN from '../../assets/sort-down.png'

let RECORDS: Record[];

export const Batch = () => {
  const params = useParams()

  const [search, setSearch] = useState<string>('')
  const [batchInfo, _1] = useState<BatchInfo>({
    department: 'Computer',
    year: 'Fourth',
    term: 'First'
  })

  const [records, setRecords] = useState<Record[]>([])

  const [header, _3] = useState<Header>({
    sub1: { name: 'Control', total: 150 },
    sub2: { name: 'Digital Signals Proccessing', total: 150 },
    sub3: { name: 'Computer Interface', total: 150 },
    sub4: { name: 'Artificial Intelligence', total: 150 },
    sub5: { name: 'Networking', total: 150 },
    sub6: { name: 'Computer Vision', total: 100 },
    total: 1050
  })

  const [sorters, setSorters] = useState<{ [key: string]: number }>({
    id: Sorted.DEC,
    sub1: Sorted.NO,
    sub2: Sorted.NO,
    sub3: Sorted.NO,
    sub4: Sorted.NO,
    sub5: Sorted.NO,
    sub6: Sorted.NO,
    total: Sorted.NO,
    precentage: Sorted.NO
  })

  const sort = (field: 'id' | 'sub1' | 'sub2' | 'sub3' | 'sub4' | 'sub5' | 'sub6' | 'total' | 'precentage') => {
    console.log('aa');
    const tempSorter = { ...sorters }

    const keys = Object.keys(sorters).filter(x => x !== field)
    for (const key of keys) {
      tempSorter[key] = Sorted.NO
    }

    if (tempSorter[field] === Sorted.NO) tempSorter[field] = Sorted.ASC
    else tempSorter[field] = (tempSorter[field] * -1)

    setSorters(tempSorter)

    if (tempSorter[field] === Sorted.ASC) setRecords(records.sort((a, b) => +a[field] - +b[field]))
    else if (tempSorter[field] === Sorted.DEC) setRecords(records.sort((a, b) => +b[field] - +a[field]))

    setRecords(records)

  }

  useEffect(() => {
    console.log('a7a');
    RECORDS = [{
      name: 'زياد عبدالناصر السيد علي',
      id: 242100231,
      sub1: 4,
      sub2: 84,
      sub3: 84,
      sub4: 84,
      sub5: 84,
      sub6: 84,
      total: 84,
      precentage: 100
    }, {
      name: 'انس هشام محمد السيد',
      id: 242100232,
      sub1: 1,
      sub2: 74,
      sub3: 81,
      sub4: 814,
      sub5: 54,
      sub6: 74,
      total: 114,
      precentage: 100
    }, {
      name: 'انيس هشام محمد السيد',
      id: 242100233,
      sub1: 22,
      sub2: 74,
      sub3: 81,
      sub4: 814,
      sub5: 54,
      sub6: 74,
      total: 114,
      precentage: 100
    }, {
      name: 'انيس هشام محمد السيد',
      id: 242100234,
      sub1: 22,
      sub2: 74,
      sub3: 81,
      sub4: 814,
      sub5: 54,
      sub6: 74,
      total: 114,
      precentage: 100
    }, {
      name: 'محمد سيد زكريا',
      id: 242100235,
      sub1: 21,
      sub2: 72,
      sub3: 84,
      sub4: 81,
      sub5: 54,
      sub6: 74,
      total: 114,
      precentage: 100
    }]
    setRecords(RECORDS)
  }, [])

  useEffect(() => {
    if(search === "") {
      setRecords(RECORDS);
    }else {
      setRecords(RECORDS.filter(x => x.name.includes(search)))
    }
    return () => {

      console.log(records);
    }
  }, [search])

  return (
    <div>
      <PlainNavBar />

      <div className='bg-white h-[calc(100%-4rem)] flex justify-center items-start'>
        <div className='flex-col justify-center items-center w-[85rem] rounded-[0.5rem]'>

          {/* Search & Info */}
          <div className='w-full h-[3.125rem] my-[1rem] flex justify-between items-center space-x-2'>

            <div className='w-[30%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
              <input className='name-field font-Sansation-Bold text-[1.25rem] w-full' value={batchInfo?.department} disabled />
              <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Department</label>
            </div>

            <div className='w-[10%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
              <input className='name-field font-Sansation-Bold text-[1.25rem] w-full' value={batchInfo?.year} disabled />
              <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Year</label>
            </div>

            <div className='w-[10%] h-full relative flex justify-start pl-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
              <input className='name-field font-Sansation-Bold text-[1.25rem] w-full' value={batchInfo?.term} disabled />
              <label className='name-field-outline font-Sansation-Light text-[1.125rem]'>Term</label>
            </div>

            <div className='w-[50%] h-full relative flex justify-end pr-4 items-center border-[2px] border-[#B4B2B2] rounded-[0.3125rem]'>
              <input className='font-sans font-bold focus:outline-0 text-right text-[1rem] w-full' dir='rtl' value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value) }}
              />
              <label className='name-field-outline-right font-Sansation-Light text-[1.26rem]'>Search</label>
            </div>
          </div>

          {/* Table Header */}
          <div className='select-none w-full bg-[#ECECEC] h-[4rem] flex items-center justify-start text-[1rem] shadow font-Sansation-Bold rounded-t-[0.5rem]'>

            <div className='w-[3%] h-full flex justify-center items-center text-center border-r border-slate-300'>
              No.
            </div>

            <div className='relative w-[20%] h-full flex justify-center items-center text-center border-r border-slate-300 px-2'>
              Name
            </div>

            <div className='relative w-[10%] h-full flex justify-center items-center text-center border-r border-slate-300 px-2'
              onClick={() => {
                sort('id')
              }}>
              Id
              <img src={(sorters.id === 0) ? SORT : (sorters.id === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-center items-center text-center border-r border-slate-300 text-[0.75rem]'
              onClick={() => {
                sort('sub1')
              }}>
              {header?.sub1.name}
              <br />
              ({header?.sub1.total})
              <img src={(sorters.sub1 === 0) ? SORT : (sorters.sub1 === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%] bottom-[12%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-center items-center text-center border-r border-slate-300 text-[0.75rem]'
              onClick={() => {
                sort('sub2')
              }}>
              {header?.sub2.name}
              <br />
              ({header?.sub2.total})
              <img src={(sorters.sub2 === 0) ? SORT : (sorters.sub2 === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%] bottom-[12%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-center items-center text-center border-r border-slate-300 text-[0.75rem]' onClick={() => {
              sort('sub3')
            }}>
              {header?.sub3.name}
              <br />
              ({header?.sub3.total})
              <img src={(sorters.sub3 === 0) ? SORT : (sorters.sub3 === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%] bottom-[12%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-center items-center text-center border-r border-slate-300 text-[0.75rem]' onClick={() => {
              sort('sub4')
            }}>
              {header?.sub4.name}
              <br />
              ({header?.sub4.total})
              <img src={(sorters.sub4 === 0) ? SORT : (sorters.sub4 === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%] bottom-[12%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-center items-center text-center border-r border-slate-300 text-[0.75rem]' onClick={() => {
              sort('sub5')
            }}>
              {header?.sub5.name}
              <br />
              ({header?.sub5.total})
              <img src={(sorters.sub5 === 0) ? SORT : (sorters.sub5 === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%] bottom-[12%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-center items-center text-center border-r border-slate-300 text-[0.75rem]' onClick={() => {
              sort('sub6')
            }}>
              {header?.sub6.name}
              <br />
              ({header?.sub6.total})
              <img src={(sorters.sub6 === 0) ? SORT : (sorters.sub6 === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%] bottom-[12%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-center items-center text-center border-r border-slate-300 px-2 '
              onClick={() => sort('total')}>
              Total
              <br />
              ({header?.total})
              <img src={(sorters.total === 0) ? SORT : (sorters.total === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%]'
              />
            </div>

            <div className='relative w-[9%] h-full flex justify-start items-center   px-2 '
              onClick={() => sort('precentage')}>
              Percentage
              <img src={(sorters.precentage === 0) ? SORT : (sorters.precentage === 1 ? SORT_UP : SORT_DOWN)}
                className='absolute w-[1rem] h-[1rem] right-[5%]'
              />
            </div>
          </div>

          {/* Table Content */}
          <div className='w-full h-[35rem] [&>*:nth-child(even)]:bg-white [&>*:nth-child(odd)]:bg-[#D9D9D9]
           [&>*:nth-child(even)]:border-slate-200 [&>*:nth-child(odd)]:border-slate-300
           overflow-y-scroll no-scrollbar border-x border-b border-slate-200 '>

            {records?.map((record, i) => {
              return <div key={i} className="w-full flex h-[1.75rem]">
                <div className='w-[3%] h-full flex justify-center items-center text-center border-r '>
                  {i + 1}
                </div>

                <div className='w-[20%] h-full flex justify-end items-center text-right border-r px-1 '>
                  {record.name}
                </div>

                <div className='w-[10%] h-full flex justify-center items-center text-center border-r '>
                  {record.id}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center border-r '>
                  {record.sub1}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center border-r '>
                  {record.sub2}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center border-r '>
                  {record.sub3}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center border-r '>
                  {record.sub4}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center border-r '>
                  {record.sub5}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center border-r '>
                  {record.sub6}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center border-r '>
                  {record.total}
                </div>

                <div className='w-[9%] h-full flex justify-center items-center text-center'>
                  {record.precentage}%
                </div>

              </div>
            })}

          </div>

        </div>
      </div>
    </div>
  )
}
