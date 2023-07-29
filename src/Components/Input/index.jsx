import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import RemoveModal from '../RemoveModal'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { selectedItem } from '@/Redux/Slices/InputSlice'
function Input({ item }) {
  const {
    _id,
    lable,
    type,
    required,
    disable,
    maxLength,
    minLength,
    name,
    readonly,
    size,
    pattern,
    placeholder,
    autofocus,
    width,
    height,
  } = item
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        id={_id}
        className="flex items-center justify-between border-b">
        <div
          onClick={() => dispatch(selectedItem(item))}
          className="flex gap-4 items-center  py-2">
          <label
            className={`${(type === 'submit' || type === 'reset') && 'hidden'}`}
            onClick={() => dispatch(selectedItem(item))}>
            {lable}
          </label>
          <input
            width={width}
            height={height}
            pattern={pattern}
            autofocus={autofocus}
            readOnly={readonly}
            size={size}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            disabled={disable}
            dir="ltr"
            type={type}
            className={`${
              type === 'text' && 'bg-gray-100 rounded-md px-2 py-1 outline-none'
            } `}
            placeholder={`${type === 'text' && placeholder}`}
          />
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="text-red-500 cursor-pointer">
          <AiFillCloseCircle size={20} />
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && <RemoveModal setIsOpen={setIsOpen} id={_id} />}
      </AnimatePresence>
    </>
  )
}

export default Input
