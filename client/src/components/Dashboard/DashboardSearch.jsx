import Lupa from './DashboardLupa'

const DashboardSearch = () => {
  return (
    <div className='p-4 flex  items-center'>
      <Lupa width='24px' height='24px' className='flex-shrink-0' />
      <input
        type='text'
        className='bg-white border-none placeholder-gray-500 focus:outline-none flex-grow pl-8'
        placeholder='Buscar'
      />
    </div>
  )
}

export default DashboardSearch
