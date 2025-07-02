import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasks";

const store = configureStore({
    reducer:{
        task: tasksSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;