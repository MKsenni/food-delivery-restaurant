import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        authorization: false,

    },
    reducers: {

        registrationUser(state, action) {
            state.users.push(action.payload);
        },
        enter(state) {
            state.authorization = true;
        },
        exit(state) {
            state.authorization = false;
        },

    }
})

export const {registrationUser, enter, exit, usersLocalStorage } = usersSlice.actions

export default usersSlice.reducer