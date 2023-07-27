import React, { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import { v4 as uuidv4 } from 'uuid'
import { GetInputs, updateInput } from '@/api'
const columns = [
  { field: 'name', headerName: 'Property', width: 100 },
  { field: 'value', headerName: 'Value', width: 150, editable: true },
]
const Table = () => {
  const selectedItem = useSelector(state => state.selectedInput)
  const { data, isLoading } = useQuery('getInputs', GetInputs)
  const rows = []
  if (!isLoading) {
    const SelectedItem = data.Inputs.find(item => item._id === selectedItem._id)
    if (SelectedItem) {
      for (const key in SelectedItem) {
        rows.push({
          id: key,
          _id: SelectedItem._id,
          value: SelectedItem[key],
          name: key,
        })
      }
    }
  }
  const filteredRows = rows.slice(1, rows.length - 1)
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: updateInput,
    onSuccess: () => {
      queryClient.invalidateQueries('getInputs')
    },
  })
  return (
    <>
      <div>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          hideFooterPagination
          onStateChange={params => {
            let arr = []
            for (const [key, value] of Object.entries(params.editRows)) {
              arr.push({ [key]: value })
              localStorage.setItem('editData', JSON.stringify(arr))
            }
            console.log(params)
            // if (arr.length) {
            //   for (const [key, value] of Object.entries(arr[0])) {
            //     for (const [key1, value1] of Object.entries(value)) {
            //       let newValue
            //       if (value1.value === 'false') {
            //         newValue = false
            //       } else if (value1.value === 'true') {
            //         newValue = true
            //       } else {
            //         newValue = value1.value
            //       }
            //       const updatedData = {
            //         [key]: newValue,
            //       }
            //       console.log(updatedData)
            //       mutate({ _id: selectedItem._id, updatedData })
            //     }
            //   }
            // }
          }}
          onCellEditStop={() => {
            const data = JSON.parse(localStorage.getItem('editData'))
            for (const [key, value] of Object.entries(data[0])) {
              for (const [key1, value1] of Object.entries(value)) {
                let newValue
                if (value1.value === 'false') {
                  newValue = false
                } else if (value1.value === 'true') {
                  newValue = true
                } else {
                  newValue = value1.value
                }
                const updatedData = {
                  [key]: newValue,
                }
                console.log(updatedData)
                mutate({ _id: selectedItem._id, updatedData })
              }
            }
          }}
        />
      </div>
    </>
  )
}

export default Table
