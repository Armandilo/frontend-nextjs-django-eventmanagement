import React from 'react'
import Header from '../components/header/Header'
import { DashboardTable } from '../components/table/DashboardTable'
import AddEvent from '../components/addEvent/AddEvent'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'

const AddPage = () => {
  return (
    <main className=''>
    <div className="bg-white border-b border-gray-200">
      <div className="relative px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 lg:px-8">
        <Breadcrumbs/>
          <div className="mt-4 mx-auto max-w-8xl mb-10 border p-10 rounded-lg bg-gray-50">
            
            <AddEvent/>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

export default AddPage