"use client";

import "./style.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Card } from "antd";
import { MENUS } from "./constants/menus";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const currentPathName = usePathname();

  useEffect(() => {
    if (currentPathName) {
      let menu = MENUS.find(({ pathName }) => pathName === currentPathName);
      if (menu) {
        setTitle(menu.subTitle);
      }
    } else setTitle("");
  }, [currentPathName]);
  return (
    <>
      <Header title={title} />
      <Flex
        className="menu-wrapper"
        gap="middle"
        align="center"
        justify="center"
      >
        {MENUS.map((menu, idx) => (
          <Link href={menu.pathName}>
            <Card key={idx} className="menu">
              <Flex vertical gap="large">
                <p className="menu-name">{menu.title}</p>
                <p>{menu.subTitle}</p>
              </Flex>
            </Card>
          </Link>
        ))}
      </Flex>
    </>
  );
}
