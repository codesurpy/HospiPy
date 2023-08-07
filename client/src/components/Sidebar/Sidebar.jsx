import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './LogoHospital'
import OptionSVG from './OptionSVG'
const Sidebar = () => {
  const [closed, setClosed] = useState(false)
  const [activeLink, setActiveLink] = useState('/');
  const handleClose = () => {
    setClosed(!closed)
  }
 
  const handleLinkClick = (path) => {  // New function
    setActiveLink(path);
  }

  return (
    <aside
      className={`sticky left-0 py-10 top-0 z-[9999] flex px-6 gap-6 h-screen ${closed ? 'w-[75px]' : 'w-1/5'} border-r-2 border-gray flex-col overflow-y-scroll bg-white text-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0`} > 
      <h1 className='flex items-center justify-between h-24'>
        {' '}
        <Logo  className={`${closed ? 'hidden' : 'visble'} h-full`}/>{' '}
        <OptionSVG className='cursor-pointer' handleClose={handleClose} />{' '}
      </h1>
      <ul className='gap-4 grid'>
        <li className={`${activeLink === '/' && !closed ? 'bg-emerald-100' : ''} pt-4 pb-4 pr-4`}>
          <NavLink
            to='/dashboard'
            className={'btn flex justify-between items-center'}
            onClick={() => handleLinkClick('/')}>
                
            <svg
              width='20'
              height='17'
              viewBox='0 0 20 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z' fill='black' />
            </svg>{' '}
            <div className={`${closed ? 'hidden' : 'visble'} whitespace-nowrap overflow-hidden `}>Panel de Control</div>
          </NavLink>
        </li>
        <li className={`${(activeLink === '/poroto' && !closed) ? 'bg-emerald-100' : ''} pt-4 pb-4  pr-4`}>
          <NavLink to='/formulario' className={'btn flex justify-between items-center none'}
          onClick={() => handleLinkClick('/poroto')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='2em'
              viewBox='0 0 320 512'>
              <path d='M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 352V128h6.9c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h0zM58.2 182.3c19.9-33.1 55.3-53.5 93.8-54.3V384h0v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2z' />
            </svg>
            <div className={closed ? 'hidden' : 'visble'}>Pacientes</div>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
