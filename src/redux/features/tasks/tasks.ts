import type { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    tasks: ITask[]
}
const initialState : IInitialState = {
    tasks: [
        {
            id: "dhfavfhjas",
            title: "I am developing frontend of the project",
            description: "Now I am installing vite react and redux",
            dueDate: "20-07-25",
            priority:"High"
        }
    ]
}

const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{

    }
})

export default tasksSlice.reducer