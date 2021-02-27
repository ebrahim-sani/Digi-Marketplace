import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./../features/userSlice";
import formSlice from "./../features/formSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    form: formSlice,
  },
});
