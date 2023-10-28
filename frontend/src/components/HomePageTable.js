"use client"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import Link from 'next/link';
import useSWR from 'swr'
import { fetcher } from '@/helper/fetcher';
import { useState,useEffect,useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const columnHelper = createColumnHelper()

// table heading
const columns = [
    columnHelper.accessor("province", {
        header: "موقعیت"
    }),
    columnHelper.accessor("job", {
        header: "وظیفه"
    }),
    columnHelper.accessor("username", {
        header: "نام خاص"
    }),
    columnHelper.accessor("name", {
        header: "نام"
    }),
    columnHelper.accessor("id", {
        header: "شماره آیدی"
    }),
]
// end of table header

// HomePageTable Component
const HomePageTable = ({url}) => {
    // search params
    const searchParamsPag = useSearchParams();
    const router = useRouter()
    const pathname = usePathname()

    // pagination states
    const [pagination,setPagination] = useState({
        pageIndex:0, //pageIndex = page number
        pageSize: 12 // pageSize = limit  
    })
    const { data, error, isLoading } = useSWR(url,fetcher)
    console.log(data);
    // {user: Array(6), totalPages: 1, currentPage: 1}
    
    const table = useReactTable({
        data: data?.user,
        columns,
        state: {
            pagination
        },
        pageCount:data?.totalPages,
        manualPagination:true,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel()
    })
    // query string for setting params
    const createQueryString = useCallback((page,pageValue) => {
        const params = new URLSearchParams(searchParamsPag)
        params.set(page,pageValue)
        // params.set(limit,limitValue)
        return params.toString()
    },[searchParamsPag])

// useeffect for seting pagination params in url
    useEffect(() => {
        // createQueryString('page',table?.getState()?.pagination?.pageIndex+1,'limit',table.getState()?.pagination?.pageSize)
        // setSearchParamsPag({page: table.getState().pagination.pageIndex+1})
        const updateURL = () => {
            
            
            const newUrl = `${pathname}?${createQueryString('page',table?.getState()?.pagination?.pageIndex+1)}`;
            console.log('this is inside useeffect',createQueryString('page',table?.getState()?.pagination?.pageIndex+1),'and this is pathname',newUrl );
            router.push(newUrl);
    }
        updateURL();
    },[pagination])
    console.log('table pagination',table.getState().pagination);

    // if there was no data then show this no result component
    if(!data) return <h1 className='bg-blue-500 text-white h-full flex justify-center items-center text-4xl '>No Result...</h1>
    // const {totalPages = 10 ,currentPage = 1} = data
    // console.log("HomePageTable data line 72",totalPages, currentPage)

    if(error){
        return <p>{error.message}</p>
    }

    if(isLoading) return <h1 className='bg-blue-500 text-white h-full flex justify-center items-center text-4xl '>Loading...</h1>

    return (
        <div>
            <div className="text-right overflow-auto overflow-x-scroll md:overflow-x-hidden px-4 max-h-fit">
                <table className='font-persionFont text-white w-full'>
                    <thead className='border-4 border-white'>
                        {
                            table.getHeaderGroups().map((headerGroup) => {
                                return <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map((headerColumn) => {
                                            return <th key={headerColumn.id} className='border-white border whitespace-nowrap text-center bg-blue-500 px-4 py-2'>{flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}</th>
                                        })
                                    }
                                </tr>
                            })
                        }

                    </thead>
                    <tbody>
                        {
                            table?.getRowModel().rows?.map((row) => {
                                return <tr key={row.id}>
                                    {
                                        row.getVisibleCells().map((tableRowData) => {
                                            return <td key={tableRowData.id} className='py-3 md:py-4 md:text-xl whitespace-nowrap p-2 text-center border border-white  text-base bg-blue-700'>{
                                                tableRowData.column.id === 'username' ? <Link  href={`/profile/${tableRowData.getValue(tableRowData.id)}`} className='inline-block w-full h-full underline '>{flexRender(tableRowData.column.columnDef.cell, tableRowData.getContext())}</Link> : flexRender(tableRowData.column.columnDef.cell, tableRowData.getContext())
                                            }</td>
                                        })
                                    }
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div className='flex justify-between m-4 font-persionFont'>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className={`${!table.getCanPreviousPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500' } hover:bg-blue-700 text-white w-fit md:px-10 px-7 py-2 text-sm md:text-xl rounded-md font-bold`}>قبلی</button>
                <p className='md:text-xl '><span className='mx-2'>{table.getPageCount()}</span> صفحه <span className='mx-2'>{table.getState().pagination.pageIndex + 1}</span> از</p>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className={`${!table.getCanNextPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500'} hover:bg-blue-700 text-white w-fit md:px-10 px-7 py-2 text-sm md:text-xl rounded-md font-bold`}>بعدی</button>
            </div>
        </div>
    )
}

export default HomePageTable