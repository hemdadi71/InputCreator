import { GetInputs } from '@/api'

import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import Input from '../Input'

function DesignerItems() {
  const { data, error, isLoading } = useQuery('getInputs', GetInputs)
  return (
    <>
      <div dir="rtl" className="grid grid-cols-2 gap-3">
        {!isLoading &&
          data.Inputs.map(item => <Input key={item._id} item={item} />)}
      </div>
    </>
  )
}

export default DesignerItems
