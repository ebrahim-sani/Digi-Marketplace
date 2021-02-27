import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    form: false,
  },
  reducers: {
    enabled: (state) => {
      state.form = true;
    },
    disabled: (state) => {
      state.form = false;
    },
  },
});

export const { enabled, disabled } = formSlice.actions;

export const selectForm = (state) => state.form.form;

export default formSlice.reducer;
