import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basket.js';
import usersReducer from "./reducers/users.js";

export default configureStore({
    reducer: {
        basket: basketReducer,
        users: usersReducer,
    }
})