import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "../features/user/userSlice"

export const rootReducer = combineReducers({
    user: userSlice
})