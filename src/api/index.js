import axios from 'axios'

export async function AddInput(data) {
  try {
    const { Data } = await axios.post('/api/Inputs', data)
    return Data
  } catch (error) {
    console.log(error)
  }
}
export async function GetInputs() {
  try {
    const { data } = await axios.get('/api/Inputs')
    return data
  } catch (error) {
    console.log(error)
  }
}
export async function DeleteInput(id) {
  try {
    const response = await axios.delete('/api/Inputs', { data: { _id: id } })
    return response
  } catch (error) {
    console.log(error)
  }
}
export const updateInput = async ({ _id, updatedData }) => {
  try {
    const response = await axios.put(`/api/Inputs`, {
      _id,
      ...updatedData,
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to update input')
  }
}
