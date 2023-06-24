const DashboardCta = ({ children, action, className, ...props }) => {
  return (
    <div
      className={`flex items-center justify-start p-4 drop-shadow-md hover:cursor-pointer ${className}`}
      onClick={action}
      {...props}
    >
      {children}
    </div>
  )
}

export default DashboardCta
