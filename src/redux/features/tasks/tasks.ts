import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    tasks: ITask[]
}
const initialState: IInitialState = {
  tasks: [
    {
      id: "dhfavfhjas",
      title: "I am developing frontend of the project",
      description: "Now I am installing vite react and redux",
      dueDate: "20-07-25",
      priority: "high",
    },
    {
      id: "dhfavfhjasxfxf",
      title: "I am developing backend of the project",
      description: "Now I am installing vite express js and mongoose",
      dueDate: "20-07-25",
      priority: "medium",
    },
  ],
};

const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{

    }
})
export const selectTask = (state:RootState) =>{
    return state.todo.tasks
}
export default tasksSlice.reducer