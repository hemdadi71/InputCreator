import mongoose from 'mongoose'

const InputSchema = new mongoose.Schema({
  text: { type: String, required: false, default: '' },
  type: { type: String, required: false, default: '' },
})

const InputModel = mongoose.models.Input || mongoose.model('Input', InputSchema)

export default InputModel
