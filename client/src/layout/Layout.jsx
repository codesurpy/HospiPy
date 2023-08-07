import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <section className='w-screen h-screen'>
            <Sidebar />
            <Outlet />
        </section>
    )
}
