import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className={`absolute left-0 py-10 top-0 z-[9999] flex px-6 gap-6 h-screen w-1/5 border-r-2 border-gray flex-col overflow-y-scroll bg-white text-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}>
            <h1 className='text-xl font-display text-center'>Hospital Regional</h1>
            <ul className='gap-4 grid'>
                <li>
                    <NavLink to="/main" className={"btn"}>
                        DashBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={"btn"}>
                        OtroComponente
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar