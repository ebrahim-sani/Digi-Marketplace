import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    form: false,
  },
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    enabled: (state) => {
      state.form = true;
    },
    disabled: (state) => {
      state.form = false;
    },
  },
});

export const { login, logout, enabled, disabled } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectForm = (state) => state.user.form;

export default userSlice.reducer;
