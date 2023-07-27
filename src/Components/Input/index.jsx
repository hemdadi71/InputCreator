import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import RemoveModal from '../RemoveModal'
import { useDispatch } from 'react-redux'
import { selectedItem } from '@/Redux/Slices/InputSlice'
function Input({ item }) {
  const { _id, lable, type, required, disable, className } = item
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  return (
    <>
      <div id={_id} className="flex items-center justify-between border-b">
        <div className="flex gap-4 items-center  py-2">
          <label onClick={() => dispatch(selectedItem(item))}>{lable}</label>
          <input
            required={required}
            disabled={disable === 'false' ? false : true}
            dir="ltr"
            type={type}
            className={className}
            placeholder={`${type === 'text' && `${lable}`}`}
          />
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="text-red-500 cursor-pointer">
          <AiFillCloseCircle size={20} />
        </div>
      </div>
      {isOpen && <RemoveModal setIsOpen={setIsOpen} id={_id} />}
    </>
  )
}

export default Input
