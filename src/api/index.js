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
    const  {data}  = await axios.get('/api/Inputs')
    return data
  } catch (error) {
    console.log(error)
  }
}
