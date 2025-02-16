import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { v1 as uuidv1 } from "uuid";

type MobilePhoneType = {
  country: string;
  phone: string;
};

type CitizenInputType = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
};
export type UserType = {
  id: string;
  title: string | undefined;
  firstName: string;
  lastName: string;
  birthDate: string;
  nationality: string | undefined;
  citizenId: CitizenInputType;
  gender: string;
  mobilePhone: MobilePhoneType;
  passportNo: string;
  expectedSalary: string;
};

export type userState = {
  isSelectedAll: boolean;
  data: UserType[];
  formData: UserType;
};

const initialState: userState = {
  isSelectedAll: false,
  data: [],
  formData: {
    id: "",
    title: undefined,
    firstName: "",
    lastName: "",
    birthDate: "",
    nationality: undefined,
    gender: "",
    mobilePhone: {
      country: "",
      phone: "",
    },
    expectedSalary: "",
    citizenId: {
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
    },
    passportNo: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsers(state) {
      const userData = localStorage.getItem("user");
      if (userData) {
        const { data, formData } = JSON.parse(userData);
        state.data = data;
        state.formData = formData;
      } else {
        console.log("loadUsers empty data");
      }
    },
    addUser: (state, action) => {
      let newData = action.payload.userData;
      let id = uuidv1();
      state.data.push({ ...newData, id });
      localStorage.setItem(
        "user",
        JSON.stringify({
          formData: state.formData,
          data: state.data,
        })
      );
    },
    updateUser: (state, action) => {
      let userIndex = state.data.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (userIndex > -1) {
        state.data.splice(userIndex, action.payload.updatedData);
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          formData: state.formData,
          data: state.data,
        })
      );
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter(
        ({ id }) => !action.payload.ids.includes(id)
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          formData: state.formData,
          data: state.data,
        })
      );
    },
    deleteAllUsers: (state) => {
      state.data = [];
      localStorage.setItem(
        "user",
        JSON.stringify({
          formData: state.formData,
          data: state.data,
        })
      );
    },
    setSelectedAll: (state, action) => {
      state.isSelectedAll = action.payload.value;
    },
    setFormData: (state, action) => {
      state.formData = action.payload.formData;
    },
    resetFormData: (state) => {
      state.formData = {
        id: "",
        title: undefined,
        firstName: "",
        lastName: "",
        birthDate: "",
        nationality: undefined,
        gender: "",
        mobilePhone: {
          country: "",
          phone: "",
        },
        expectedSalary: "",
        citizenId: {
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
        },
        passportNo: "",
      };
    },
    setTitle: (state, action) => {
      state.formData.title = action.payload.value;
    },
    setFirstName: (state, action) => {
      state.formData.firstName = action.payload.value;
    },
    setLastName: (state, action) => {
      state.formData.lastName = action.payload.value;
    },
    setBirthDate: (state, action) => {
      state.formData.birthDate = action.payload.value;
    },
    setNationality: (state, action) => {
      state.formData.nationality = action.payload.value;
    },
    setCitizenIdFirst: (state, action) => {
      state.formData.citizenId.first = action.payload.value;
    },
    setCitizenIdSecond: (state, action) => {
      state.formData.citizenId.second = action.payload.value;
    },
    setCitizenIdThird: (state, action) => {
      state.formData.citizenId.third = action.payload.value;
    },
    setCitizenIdFourth: (state, action) => {
      state.formData.citizenId.fourth = action.payload.value;
    },
    setCitizenIdFifth: (state, action) => {
      state.formData.citizenId.fifth = action.payload.value;
    },
    setPhoneCountryCode: (state, action) => {
      state.formData.mobilePhone.country = action.payload.value;
    },
    setPhoneNumber: (state, action) => {
      state.formData.mobilePhone.phone = action.payload.value;
    },
    setPassportNo: (state, action) => {
      state.formData.passportNo = action.payload.value;
    },
    setExpectedSalary: (state, action) => {
      state.formData.expectedSalary = action.payload.value;
    },
    setGender: (state, action) => {
      state.formData.gender = action.payload.value;
    },
  },
});

export const {
  loadUsers,
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  setSelectedAll,
  setFormData,
  resetFormData,
  setTitle,
  setFirstName,
  setLastName,
  setBirthDate,
  setNationality,
  setCitizenIdFirst,
  setCitizenIdSecond,
  setCitizenIdThird,
  setCitizenIdFourth,
  setCitizenIdFifth,
  setPhoneCountryCode,
  setPhoneNumber,
  setPassportNo,
  setExpectedSalary,
  setGender,
} = userSlice.actions;

export const userSelector = (store: RootState) => store.userReducer;

export default userSlice.reducer;
