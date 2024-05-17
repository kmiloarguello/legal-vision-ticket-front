import { Task } from "types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Task[] = [
  { id: 1, title: "Task A", done: false },
  { id: 2, title: "Task B", done: true },
  { id: 3, title: "Task C", done: false },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
  },
});

export const { addTask, toggleTask } = taskSlice.actions;
export const selectTasks = (state: { task: Task[] }) => state.task;
export const selectTaskById = (state: { task: Task[] }, id: number) =>
  state.task.find((task) => task.id === id);
export default taskSlice.reducer;
