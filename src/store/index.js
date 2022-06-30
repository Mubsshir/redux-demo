import { configureStore, createSlice } from "@reduxjs/toolkit"


const counterInitialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        }
    }
})
const isAuthenticate = localStorage.getItem('authenticate')
const authInitialState = {
    username: 'Admin',
    password: '123456',
    isAuth: isAuthenticate ? true : false
}
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        isValid(state, action) {
            console.log("I ran")
            if (state.username === action.payload.username && state.password === action.payload.password) {
                localStorage.setItem('authenticate', '1')
                state.isAuth = true
            }
        },
        logout(state) {
            localStorage.removeItem('authenticate')
            state.isAuth = false
        }
    }
})
const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store