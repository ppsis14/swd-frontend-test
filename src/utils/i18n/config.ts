import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MENUS, TH_MENUS } from "@/app/constants/menus";

const resources = {
  en: {
    translation: {
      header: {
        langMenu: {
          label: {
            th: "TH",
            en: "EN",
          },
        },
      },
      homePage: {
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
      connectAPIPage: {},
      formPage: {
        form: {
          title: {
            label: "Title",
            options: {
              mr: "Mr.",
              ms: "Ms.",
              mrs: "Mrs.",
            },
            placeholder: "Title",
          },
          firstName: { label: "Firstname", options: {}, placeholder: "" },
          lastName: { label: "Lastname", options: {}, placeholder: "" },
          birthDate: {
            label: "Birthday",
            options: {},
            placeholder: "mm//dd/yy",
          },
          nationality: {
            label: "Nationality",
            options: {
              thai: "Thai",
              american: "American",
              french: "French",
            },
            placeholder: "-- Please select --",
          },
          gender: {
            label: "Gender",
            options: {
              male: "Male",
              female: "Female",
              unisex: "Unisex",
            },
            placeholder: "",
          },
          mobilePhone: {
            label: "Mobile Phone",
            country: { label: "", options: {}, placeholder: "" },
            phone: { label: "", options: {}, placeholder: "" },
          },

          citizenId: { label: "CitizenID", options: {}, placeholder: "" },
          passportNo: { label: "Passport No", options: {}, placeholder: "" },
          expectedSalary: {
            label: "Expected Salary",
            options: {},
            placeholder: "",
          },
        },
        button: {
          home: "Home",
          reset: "RESET",
          submit: "SUBMIT",
          prev: "PREV",
          next: "NEXT",
          delete: "DELETE",
          edit: "EDIT",
        },
        checkbox: { selectAll: "Select All" },
        table: {
          column: {
            name: "Name",
            gender: "Gender",
            mobilePhone: "Mobile Phone",
            nationality: "Nationality",
            manage: "MANAGE",
          },
        },
      },
    },
  },
  th: {
    translation: {
      header: {
        langMenu: {
          label: {
            th: "ไทย",
            en: "อังกฤษ",
          },
        },
      },
      homePage: {
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
      connectAPIPage: {},
      formPage: {
        form: {
          title: {
            label: "คำนำหน้า",
            options: {
              mr: "นาย",
              ms: "นางสาว",
              mrs: "นาง",
            },
            placeholder: "คำนำหน้า",
          },
          firstName: { label: "ชื่อจริง", options: {}, placeholder: "" },
          lastName: { label: "นามสกุล", options: {}, placeholder: "" },
          birthDate: {
            label: "วันเกิด",
            options: {},
            placeholder: "เดือน/วัน/ปี",
          },
          nationality: {
            label: "สัญชาติ",
            options: {
              thai: "ไทย",
              american: "อเมริกัน",
              french: "ฝรั่งเศส",
            },
            placeholder: "-- กรุณาเลือก --",
          },
          gender: {
            label: "เพศ",
            options: {
              male: "ผู้ชาย",
              female: "ผู้หญิง",
              unisex: "ไม่ระบุ",
            },
            placeholder: "",
          },
          mobilePhone: {
            label: "หมายเลขโทรศัพท์มือถือ",
            country: { label: "", options: {}, placeholder: "" },
            phone: { label: "", options: {}, placeholder: "" },
          },

          citizenId: { label: "เลขบัตรประชาชน", options: {}, placeholder: "" },
          passportNo: { label: "หนังสือเดินทาง", options: {}, placeholder: "" },
          expectedSalary: {
            label: "เงินเดือนที่คาดหวัง",
            options: {},
            placeholder: "",
          },
        },
        button: {
          home: "หน้าหลัก",
          reset: "ล้างข้อมูล",
          submit: "ส่งข้อมูล",
          prev: "ก่อนหน้า",
          next: "ถัดไป",
          delete: "ลบข้อมูล",
          edit: "แก้ไขข้อมูล",
        },
        checkbox: { selectAll: "เลือกทั้งหมด" },
        table: {
          column: {
            name: "ชื่อ",
            gender: "เพศ",
            mobilePhone: "หมายเลขโทรศํพท์มือถือ",
            nationality: "สัญชาติ",
            manage: "จัดการ",
          },
        },
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
