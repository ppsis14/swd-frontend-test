// "use client";
import React, { useEffect } from "react";
import { pageSelector } from "@/stores/slices/pageSlice";
import { useAppDispatch, RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import { changeLanguage, updatePageTitle } from "@/stores/slices/pageSlice";

import { Flex, Select } from "antd";
import i18n from "@/utils/i18n/config";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { MENUS } from "@/app/constants/menus";

type Props = {
  title?: string;
};

const Header = ({ title }: Props) => {
  const pageReducer = useSelector(pageSelector);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const currentPathName = usePathname();

  useEffect(() => {
    if (currentPathName) {
      let menu = MENUS.find(({ pathName }) => pathName === currentPathName);
      if (menu) handleChangeTitle(t(`homePage.menus.${menu.name}.subTitle`));
    } else handleChangeLanguage("");
  }, [currentPathName]);

  const langOptions = [
    { value: "en", label: pageReducer.currentLang === "en" ? "EN" : "อังกฤษ" },
    { value: "th", label: pageReducer.currentLang === "en" ? "TH" : "ไทย" },
  ];
  const handleChangeLanguage = (value: string) => {
    dispatch(changeLanguage({ value }));
    i18n.changeLanguage(value);
    handleChangeTitle();
  };

  const handleChangeTitle = () => {
    let value = "";
    if (currentPathName) {
      let menu = MENUS.find(({ pathName }) => pathName === currentPathName);

      if (menu) {
        value = t(`homePage.menus.${menu.name}.subTitle`);
      }
    }
    dispatch(updatePageTitle({ value }));
  };

  return (
    <Flex className="header-wrapper" align="center" justify="space-between">
      <h2>{pageReducer.title}</h2>
      <Select
        size="small"
        value={pageReducer.currentLang}
        style={{ minWidth: "fit-content" }}
        onChange={handleChangeLanguage}
        options={langOptions}
      />
    </Flex>
  );
};

export default Header;
