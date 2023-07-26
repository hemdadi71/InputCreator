import { GetInputs } from '@/api'

import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import Input from '../Input'

function DesignerItems() {
  const { data, error, isLoading } = useQuery('getInputs', GetInputs)
  if (!isLoading) {
    console.log(data)
  }
  return (
    <>
      <div dir='rtl' className="grid grid-cols-2 gap-3">
        {!isLoading &&
          data.Inputs.map(item => (
            <Input key={item._id} label={item.text} type={item.type} />
          ))}
      </div>
    </>
  )
}

export default DesignerItems
