import { DeleteInput } from '@/api'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useMutation, useQueryClient } from 'react-query'
import Spinner from '../Spinner'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
const RemoveModal = ({ setIsOpen, id }) => {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: DeleteInput,
    onSuccess: () => {
      queryClient.invalidateQueries('getInputs')
      setIsOpen(false)
      toast('Successfully input removed', {
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
      })
    },
  })
  const handleRemoveInput = () => {
    mutate(id)
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        dir="ltr"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-[15%] flex flex-col gap-2 p-3 z-20">
        <div
          onClick={() => setIsOpen(false)}
          className="text-red-500 cursor-pointer">
          <AiFillCloseCircle size={20} />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-3">Are you sure?</p>
          <div className="flex items-center gap-5">
            <button
              onClick={handleRemoveInput}
              className="bg-red-500 rounded-md text-white px-2 py-1 flex items-center gap-2">
              <p>Yes</p>
              {isLoading && <Spinner className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-500 rounded-md text-white px-3 py-1">
              No
            </button>
          </div>
        </div>
      </motion.div>
      <div
        onClick={() => setIsOpen(false)}
        className="absolute bg-black backdrop-blur-sm w-full h-full left-0 top-0 bg-opacity-40 z-10"></div>
    </>
  )
}

export default RemoveModal
