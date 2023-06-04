import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User{
    id: string,
    email: string,
    password: string
}

interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser : (state, action: PayloadAction<User>) => {
            const newUser: User = {
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
            }
            state.users = [...state.users, newUser]
        },
    }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer