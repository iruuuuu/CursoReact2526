interface LoadingFallbackProps {
    message?:string
}


const LoadingFallback = ({message}:LoadingFallbackProps) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600'>

        </div>
        <p>
          {message}
        </p>
      </div>
    </div>
  )
}

export default LoadingFallback