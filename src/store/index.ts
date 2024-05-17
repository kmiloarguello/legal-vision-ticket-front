import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "./reducers/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export type LegalVisionState = ReturnType<typeof store.getState>;
export type LegalVisionDispatch = typeof store.dispatch;
export default store;
