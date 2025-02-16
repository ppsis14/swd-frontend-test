"use client";
import "./style.scss";
import React from "react";
import Link from "next/link";
import { Flex, Card } from "antd";
import { MENUS } from "./constants/menus";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
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
