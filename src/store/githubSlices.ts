import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
/** *****************************************************************
  | Author            : @deniprobow
  | Name              : github slice
  | Updater           : @deniprobow
  | last_change       : 2023-04-05
  | Description_update: -
  | Description       : function for set and get any data github api that store in redux
  *******************************************************************/
const githubSlice = createSlice({
    name: 'github',
    initialState: {
        userSearch : '',
        users : [],
        repos : []
    },
    reducers: {
        setSearchKeyword:(state,action)=>{
            state.userSearch= action.payload
        },
        setUser:(state,action)=>{
            state.users = action.payload
        },
        setRepo:(state,action)=>{
            state.repos = action.payload
        },
    }
})

export const { setUser, setRepo, setSearchKeyword } = githubSlice.actions
export default githubSlice.reducer