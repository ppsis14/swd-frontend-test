"use client";

import "./style.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Card } from "antd";
import { MENUS } from "./constants/menus";
// import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { useTranslation } from "next-i18next";

export default function Home() {
  // const [title, setTitle] = useState<string>("");
  // const currentPathName = usePathname();
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (currentPathName) {
  //     let menu = MENUS.find(({ pathName }) => pathName === currentPathName);
  //     if (menu) {
  //       setTitle(t(`homePage.menus.${menu.name}.subTitle`));
  //     }
  //   } else setTitle("");
  // }, [currentPathName]);
  return (
    <>
      {/* <Header title={title} /> */}
      <Header />
      <Flex
        className="menu-wrapper"
        gap="middle"
        align="center"
        justify="center"
      >
        {MENUS.map(({ pathName, name }, idx) => (
          <Link key={idx} href={pathName}>
            <Card key={idx} className="menu">
              <Flex vertical gap="large">
                <p className="menu-name">{t(`homePage.menus.${name}.title`)}</p>
                <p>{t(`homePage.menus.${name}.subTitle`)}</p>
              </Flex>
            </Card>
          </Link>
        ))}
      </Flex>
    </>
  );
}
