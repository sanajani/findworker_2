"use client"
import HomePageTable from "../components/HomePageTable"
import SearchTable from "../components/SearchTable"
import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()
  const pageSearchParamPagination = searchParams.get('page')
  // console.log('home page search params',pageSearchParamPagination);
  return (
    <main className="min-h-screen pt-24 grid grid-cols-1 md:grid-cols-3 md:px-4">
      <div>
        <SearchTable />
      </div>
      <div className='md:col-span-2 md:w-full'>
        <HomePageTable url={`/api/users/all?page=${pageSearchParamPagination}`} />
      </div>
    </main>
  )
}
