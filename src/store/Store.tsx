import { configureStore } from "@reduxjs/toolkit";
import postListReducer from "../slice/PostListSlice"

export const Store = configureStore({
    reducer : {
        postList : postListReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch