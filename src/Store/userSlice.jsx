import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
    user: null 
}

const todosSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
       
    setUserDetails : (state,action) =>{

          state.user  = action.payload
    } 
  }
})

export const { setUserDetails  } = todosSlice.actions
export default todosSlice.reducer