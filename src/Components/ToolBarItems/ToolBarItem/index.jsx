import { AddInput } from '@/api'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'

function ToolBarItem({ item }) {
  const { lable, type, disable, required, className } = item
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: AddInput,
    onSuccess: () => {
      queryClient.invalidateQueries('getInputs')
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
      <div className="p-3 border-b border-gray-300 text-[18px] cursor-pointer hover:text-white hover:bg-purple-400 transition-all duration-300">
        <p onClick={handleAddInput}>{lable}</p>
      </div>
    </>
  )
}

export default ToolBarItem
