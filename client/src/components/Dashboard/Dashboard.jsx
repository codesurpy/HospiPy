import React from 'react'
import DashboardTable from './DashboardTable'
import DashboardSearch from './DashboardSearch'
import DashboardCta from './DashboardCta'

const Dashboard = () => {
  return (
    <div className='p-8 h-screen w-screen bg-[#CCC] text-gray-900 flex flex-col'>
      <header className='flex flex-row justify-between p-3'>
        <span className='text-4xl'>Buenos Dias, Dr. Benitez</span>
        <span>Admin</span>
      </header>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 flex-grow'>
        <div className='row-span-3 bg-[#FFFFFF] p-4 drop-shadow-md'>
          <div className='text-2xl'>Pacientes</div>
          <DashboardSearch />
          <DashboardTable />
        </div>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 col-start-2 col-end-4'>
          <DashboardCta className='bg-[#0f766e]'>
            32 Pacientes hospitalizados
          </DashboardCta>
          <DashboardCta className='bg-[#6d28d9]'>
            2 Doctores en Turno
          </DashboardCta>
          <DashboardCta className='bg-[#ca8a04]'>
            3 Camas Disponibles
          </DashboardCta>
          <DashboardCta className='bg-[#FFFFFF] '>
            2 Actualizaciones necesarias
          </DashboardCta>
        </div>
        <div className='bg-[#FFFFFF] col-start-2 col-end-4 row-start-2 row-end-3 p-4 drop-shadow-md'>
          <div className='text-2xl'>Camas Disponibles</div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 h-4/5 gap-1'>
            <div className='flex bg-red-400 items-center justify-center '>
              1
            </div>
            <div className='flex bg-green-300 items-center justify-center'>
              2
            </div>
            <div className='flex bg-green-300 items-center justify-center'>
              3
            </div>
            <div className='flex bg-red-400 items-center justify-center'>4</div>
            <div className='flex bg-red-400 items-center justify-center'>5</div>
            <div className='flex bg-red-400 items-center justify-center'>6</div>
            <div className='flex bg-green-300 items-center justify-center'>
              7
            </div>
            <div className='flex bg-red-400 items-center justify-center'>8</div>
          </div>
        </div>
        <div className='bg-[#FFFFFF] col-start-2 col-end-4 p-4 drop-shadow-md'>
          <div className='text-2xl'>Doctores en turno</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
