import mongoose from 'mongoose'

const InputSchema = new mongoose.Schema({
  lable: { type: String, required: false, default: '' },
  type: { type: String, required: false, default: '' },
  pattern: { type: String, required: false, default: '' },
  width: { type: String, required: false, default: '' },
  height: { type: String, required: false, default: '' },
  placeholder: { type: String, required: false, default: '' },
  disable: { type: Boolean, required: false, default: false },
  autofocus: { type: Boolean, required: false, default: false },
  readOnly: { type: Boolean, required: false, default: false },
  required: { type: Boolean, required: false, default: false },
  maxLength: { type: Number, required: false, default: 20 },
  minLength: { type: Number, required: false, default: 3 },
  size: { type: Number, required: false, default: 30 },
  name: {
    type: String,
    required: false,
    default: '',
  },
})

const InputModel = mongoose.models.Input || mongoose.model('Input', InputSchema)

export default InputModel
