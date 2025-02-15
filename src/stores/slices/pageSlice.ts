import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Language = "en" | "th";

interface PageState {
  currentLang: Language;
  title: string;
}

const initialState: PageState = {
  currentLang: "en",
  title: "",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLang = action.payload.value;
    },
    updatePageTitle: (state, action) => {
      state.title = action.payload.value;
    },
  },
});

export const { changeLanguage, updatePageTitle } = pageSlice.actions;

export const pageSelector = (store: RootState) => store.pageReducer;

export default pageSlice.reducer;
