import React from 'react'

function Input({ label, type }) {
  return (
    <>
      <div className='flex gap-4 items-center border-b py-2'>
        <label htmlFor="input">{label}</label>
        <input type={type} />
      </div>
    </>
  )
}

export default Input
