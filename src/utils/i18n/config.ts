import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MENUS, TH_MENUS } from "@/app/constants/menus";

const resources = {
  en: {
    translation: {
      homePage: {
        // title: "",
        // subTitle: "",
        menus: {
          layout: { title: "Test 1", subTitle: "Layout & Style" },
          connectApi: { title: "Test 2", subTitle: "Connect API" },
          form: { title: "Test 3", subTitle: "Form & Table" },
        },
      },
      layoutPage: {
        movePosition: "Move shape",
        changeLayout: "Move position",
      },
      connectAPIPage: {
        // title: "Test 2",
        // subTitle: "Connect API",
      },
      formPage: {
        // title: "Test 3",
        // subTitle: "Form & Table",
      },
    },
  },
  th: {
    translation: {
      homePage: {
        // title: "",
        // subTitle: "",
        menus: {
          layout: { title: "แบบทดสอบที่ 1", subTitle: "การจัดการหน้าเว็บ" },
          connectApi: { title: "แบบทดสอบที่ 2", subTitle: "การเชื่อมต่อ API" },
          form: { title: "แบบทดสอบที่ 3", subTitle: "การจัดการหน้าฟอร์ม" },
        },
      },
      layoutPage: {
        movePosition: "เลื่อนรูปแบบ",
        changeLayout: "เปลี่ยนตำแหน่ง",
      },
      connectAPIPage: {
        // title: "Test 2",
        // subTitle: "Connect API",
      },
      formPage: {
        // title: "Test 3",
        // subTitle: "Form & Table",
      },
    },
  },
};

// export const defaultNS = "ns1";

i18n.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
  fallbackLng: "en", // if you're using a language detector
  interpolation: {
    escapeValue: false,
  },
  // defaultNS,
});

export default i18n;
