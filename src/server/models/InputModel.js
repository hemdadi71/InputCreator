import mongoose from 'mongoose'

const InputSchema = new mongoose.Schema({
  lable: { type: String, required: false, default: '' },
  type: { type: String, required: false, default: '' },
  disable: { type: String, required: false, default: false },
  required: { type: String, required: false, default: false },
})

const InputModel = mongoose.models.Input || mongoose.model('Input', InputSchema)

export default InputModel
