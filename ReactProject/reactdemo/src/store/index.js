import { combineReducers, configureStore } from '@reduxjs/toolkit'

import counter from '../reducers/counterSlice'

const rootReducer= combineReducers({
 counter: counter,
});

export const store = configureStore({
  reducer: rootReducer
}) 