import { GetInputs } from '@/api'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import Input from '../Input'

function DesignerItems() {
  const { data, error, isLoading } = useQuery('getInputs', GetInputs)
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div dir="rtl" className="grid grid-cols-2 gap-3">
          <AnimatePresence>
            {!isLoading &&
              data.Inputs.map(item => <Input key={item._id} item={item} />)}
          </AnimatePresence>
        </div>
      </form>
    </>
  )
}

export default DesignerItems
