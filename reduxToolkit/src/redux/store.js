import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../featuresCounter/counterSlice'
export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})