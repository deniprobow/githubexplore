import { configureStore } from '@reduxjs/toolkit'
import githubReducer from './githubSlices'

/** *****************************************************************
  | Author            : @deniprobow
  | Name              : store
  | Updater           : @deniprobow
  | last_change       : 2023-04-05
  | Description_update: -
  | Description       : store function to init any reducer
  *******************************************************************/
export default configureStore({
    reducer: {
        github: githubReducer,
    }
})