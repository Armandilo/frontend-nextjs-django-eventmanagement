import React from 'react'
import Header from '../components/header/Header'
import DashboardTable from '../components/table/DashboardTable'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'

const DashboardPage = () => {
  return (
    <main className=''>
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="relative px-6 pt-10 lg:px-8">
  
        <div className="mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 lg:px-8">
          
          <div className="mx-auto max-w-8xl mb-10">
            <Header />
          </div>
      
        

        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="relative px-6 pt-10 lg:px-8">
   
        <div className="mx-auto max-w-screen-2xl px-2 py-22 sm:px-6 sm:py-19 lg:py-34 lg:px-8">
          <div className="mx-auto max-w-8xl mb-10">
            <DashboardTable/>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

export default DashboardPage