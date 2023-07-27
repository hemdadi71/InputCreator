const { configureStore } = require('@reduxjs/toolkit')
const { default: InputSlice } = require('./Slices/InputSlice')

export const store = configureStore({
  reducer: {
    selectedInput: InputSlice,
  },
})
