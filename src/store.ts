import { configureStore, combineReducers } from '@reduxjs/toolkit';

interface CredentialsState {
  email: string,
  password: string
}

const initialState: CredentialsState = { email: '', password: ''}

enum CounterActionTypes {
    ADD_EMAIL = 'ADD_EMAIL',
    ADD_PASSWORD = 'ADD_PASSWORD'
  }
  
  type CounterAction =
    | { type: CounterActionTypes.ADD_EMAIL, payload: string }
    | { type: CounterActionTypes.ADD_PASSWORD, payload: string }

const credentialsReducer = (state: CredentialsState = initialState, action: CounterAction) => {
    switch(action.type){
        case 'ADD_EMAIL':
            return { ...state, email: action.payload }
        case 'ADD_PASSWORD':
            return { ...state, password: action.payload }
    }
};

const rootReducer = combineReducers({credentialsReducer})
const store = configureStore({reducer: rootReducer})

export default store;

export type RootState = ReturnType<typeof rootReducer>