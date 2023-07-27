import mongoose from 'mongoose'

const InputSchema = new mongoose.Schema({
  lable: { type: String, required: false, default: '' },
  type: { type: String, required: false, default: '' },
  className: { type: String, required: false, default: 'rounded-md bg-gray-100 px-2 py-1' },
  disable: { type: String, required: false, default: false },
  required: { type: String, required: false, default: false },
})

const InputModel = mongoose.models.Input || mongoose.model('Input', InputSchema)

export default InputModel
