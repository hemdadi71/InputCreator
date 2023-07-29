import Spinner from '@/Components/Spinner'
import { AddInput } from '@/api'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from 'react-query'

function ToolBarItem({ item }) {
  const { lable, type, disable, required, className } = item
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: AddInput,
    onSuccess: () => {
      queryClient.invalidateQueries('getInputs')
      toast.success('Successfully input added')
    },
  })
  const handleAddInput = e => {
    const data = {
      className,
      disable,
      required,
      lable,
      type,
    }
    mutate(data)
  }
  return (
    <>
      <div className="p-3 flex items-center justify-between border-b border-gray-300 text-[18px] cursor-pointer hover:text-white hover:bg-purple-400 transition-all duration-300">
        <p onClick={handleAddInput}>{lable}</p>
        {isLoading && <Spinner className="w-6 h-6" />}
      </div>
    </>
  )
}

export default ToolBarItem
