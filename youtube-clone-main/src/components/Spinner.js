import React from 'react'

export default function Spinner() {
  return (
    <div className='flex items-center w-full justify-center'>
      <div className='w-8 h-8 border-2 border-white-500 border-solid rounded-full animate-spin border-t-transparent'>
      </div>
    </div>
  )
}
