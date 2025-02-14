import "./style.scss";
import React from "react";
import Link from "next/link";
import { Flex, Card } from "antd";

export default function Home() {
  const menus = [
    { name: "layout", title: "Test 1", subTitle: "Layout & Style" },
    { name: "connect-api", title: "Test 2", subTitle: "Connect API" },
    { name: "form", title: "Test 3", subTitle: "Form & Table" },
  ];
  return (
    <div className="page">
      <main className="main">
        <Flex
          className="menu-wrapper"
          gap="middle"
          align="center"
          justify="center"
        >
          {menus.map((menu) => (
            <Link href={`/${menu.name}`}>
              <Card className="menu">
                <Flex vertical gap="large">
                  <p className="menu-name">{menu.title}</p>
                  <p>{menu.subTitle}</p>
                </Flex>
              </Card>
            </Link>
          ))}
        </Flex>
      </main>
    </div>
  );
}
