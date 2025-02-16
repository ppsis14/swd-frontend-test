import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import i18n from "@/utils/i18n/config";

type Language = "en" | "th" | string;

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
    loadCurrentLang: (state) => {
      // const lang = localStorage.getItem("lang");
      // console.log("loadCurrentLang -> lang:", lang, i18n.language);
      // if (lang) {
      //   console.log("has lang:");
      //   state.currentLang = JSON.parse(lang);
      //   console.log(state.currentLang);
      // } else {
      //   console.log("empty lang");
      //   state.currentLang = i18n.language;
      //   localStorage.setItem("lang", JSON.stringify(state.currentLang));
      // }
      // i18n.changeLanguage(state.currentLang);
    },
    changeLanguage: (state, action) => {
      state.currentLang = action.payload.value;
      // localStorage.setItem("lang", JSON.stringify(state.currentLang));
    },
    updatePageTitle: (state, action) => {
      console.log("updatePageTitle");

      state.title = action.payload.value;
    },
  },
});

export const { loadCurrentLang, changeLanguage, updatePageTitle } =
  pageSlice.actions;

export const pageSelector = (store: RootState) => store.pageReducer;

export default pageSlice.reducer;
