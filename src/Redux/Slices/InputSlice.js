const { createSlice } = require('@reduxjs/toolkit')

const InputSlice = createSlice({
  name: 'inputSlice',
  initialState: [],
  reducers: {
    selectedItem: (state, action) => {
      return action.payload
    },
  },
})
export const { selectedItem } = InputSlice.actions
export default InputSlice.reducer
