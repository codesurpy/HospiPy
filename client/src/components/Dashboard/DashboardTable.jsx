const TableThree = () => {
  return (
    <div className='rounded-sm px-4 pt-1 pb-1 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
      <div className='max-w-full overflow-x-auto'>
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-gray-2 text-left dark:bg-meta-4'>
              <th className='min-w-[120px] py-4 px-1 font-medium text-black  xl:pl-4'>
                Paciente
              </th>

              <th className='min-w-[120px] py-4 px-1 font-medium text-black '>
                Estado
              </th>
              <th className='py-4 px-1 font-medium text-black '>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-b border-[#eee] py-1 px-1  dark:border-strokedark xl:pl-4'>
                <h5 className='font-medium text-black '>Felipe Centurion</h5>
              </td>

              <td className='border-b border-[#eee] py-5 px-1 dark:border-strokedark'>
                <p className='inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success'>
                  Grave
                </p>
              </td>
              <td className='border-b border-[#eee] py-5 px-1 dark:border-strokedark'>
                <div className='flex items-center space-x-3.5'>Ver Ficha</div>
              </td>
            </tr>
            <tr>
              <td className='border-b border-[#eee] py-5 px-1  dark:border-strokedark xl:pl-4'>
                <h5 className='font-medium text-black '>Ramon Gonzalez</h5>
              </td>

              <td className='border-b border-[#eee] py-5 px-1 dark:border-strokedark'>
                <p className='inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success'>
                  Estable
                </p>
              </td>
              <td className='border-b border-[#eee] py-5 px-1 dark:border-strokedark'>
                <div className='flex items-center space-x-3.5'>Ver Ficha</div>
              </td>
            </tr>
            <tr>
              <td className='border-b border-[#eee] py-5 px-1  dark:border-strokedark xl:pl-4'>
                <h5 className='font-medium text-black '>Brahiam Medina</h5>
              </td>

              <td className='border-b border-[#eee] py-5 px-1 dark:border-strokedark'>
                <p className='inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger'>
                  Grave
                </p>
              </td>
              <td className='border-b border-[#eee] py-5 px-1 dark:border-strokedark'>
                <div className='flex items-center space-x-3.5'>Ver Ficha</div>
              </td>
            </tr>
            <tr>
              <td className='py-5 px-1  xl:pl-4'>
                <h5 className='font-medium text-black '>Maria Gimenez</h5>
              </td>

              <td className='py-5 px-1'>
                <p className='inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning'>
                  Revision
                </p>
              </td>
              <td className='py-5 px-1'>
                <div className='flex items-center space-x-3.5'>Ver Ficha</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableThree
