import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import { GetInputs, updateInput } from '@/api'
const columns = [
  {
    field: 'name',
    headerName: 'Property',
    width: 174,
    headerClassName: 'bg-purple-200',
  },
  {
    field: 'value',
    headerName: 'Value',
    width: 165,
    editable: true,
    headerClassName: 'bg-purple-200',
  },
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
        {Object.keys(filteredRows).length ? (
          <DataGrid
            rows={filteredRows}
            columns={columns}
            className="bg-white"
            hideFooter
            sx={{
              '& .MuiDataGrid-cell': {
                border: 1,
                borderColor: 'gray',
              },
            }}
            onStateChange={params => {
              let arr = []
              for (const [key, value] of Object.entries(params.editRows)) {
                arr.push({ [key]: value })
                localStorage.setItem('editData', JSON.stringify(arr))
              }
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
        ) : null}
      </div>
    </>
  )
}

export default Table
