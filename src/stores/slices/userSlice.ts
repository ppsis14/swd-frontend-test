import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  nataionality?: string;
  citizenId?: string;
  gender: string;
  mobilePhone: string;
  passportNo?: string;
  expectedSalary?: string;
};

interface userState {
  isSelectedAll: boolean;
  data: User[];
}

const initialState: userState = {
  isSelectedAll: false,
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {},
    updateUser: (state, action) => {},
    deleteUser: (state, action) => {},
    deleteAllUsers: (state, action) => {},
  },
});

export const { addUser, updateUser, deleteUser, deleteAllUsers } =
  userSlice.actions;

export const userSelector = (store: RootState) => store.userReducer;

export default userSlice.reducer;
