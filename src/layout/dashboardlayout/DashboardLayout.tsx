import Sidebar from '../Sidebar';
import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const DashboardLayout: React.FC = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] h-screen bg-gray-50'>
      <Sidebar />
      <div className='grid grid-rows-[auto_1fr] w-full'>
        <Header />
        <main className='p-6 bg-gray-100 flex-1 rounded-lg shadow-inner'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
