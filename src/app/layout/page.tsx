"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { Col, Row, Divider, Button, Flex, Tag } from "antd";
import { useTranslation } from "react-i18next";

type Props = {};

type ShapeData = {
  shape: string;
  orderIndex: number;
};

type movePosition = "left" | "right";
type layoutPosition = "up" | "down";

const page = (props: Props) => {
  const { t } = useTranslation();
  const [layoutPosition, setLayoutPosition] = useState<layoutPosition>("up");
  const [shapesData, setShapeData] = useState<ShapeData[]>([
    {
      shape: "square",
      orderIndex: 0,
    },
    {
      shape: "circle",
      orderIndex: 1,
    },
    {
      shape: "oval",
      orderIndex: 2,
    },
    {
      shape: "trapezoid",
      orderIndex: 3,
    },
    {
      shape: "rectangle",
      orderIndex: 4,
    },
    {
      shape: "parallelogram",
      orderIndex: 5,
    },
  ]);

  const controllBtnStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    paddingTop: "8px",
    paddingBottom: "16px",
  };
  const shapeBtnStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    padding: "16px",
  };

  const shufffleShape = (shapes: ShapeData[]) => {
    for (let i = shapes.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [shapes[i], shapes[random]] = [shapes[random], shapes[i]];
    }

    let result = [...shapes].map((shape, idx) => ({
      ...shape,
      orderIndex: idx,
    })) as ShapeData[];
    setShapeData(result);
  };
  const moveShape = (shapes: ShapeData[], position: movePosition) => {
    let result;
    let tempShape;
    if (position === "left") {
      tempShape = shapes.shift();
      result = [...shapes, tempShape];
    } else {
      tempShape = shapes.pop();
      result = [tempShape, ...shapes];
    }

    result = result.map((shape, idx) => ({
      ...shape,
      orderIndex: idx,
    })) as ShapeData[];
    setShapeData(result);
  };
  const movePosition = () => {
    if (layoutPosition === "up") {
      setLayoutPosition("down");
    } else {
      setLayoutPosition("up");
    }
  };

  const calColumnOffset = (position: layoutPosition, shapeIndex: number) => {
    let dataLength = shapesData.length;
    if (position === "up") {
      if (shapeIndex === 0) return dataLength;
      else if (shapeIndex === dataLength / 2) return dataLength / 2;
      return undefined;
    } else {
      if (shapeIndex === 0) return dataLength / 2;
      else if (shapeIndex === dataLength / 2) return dataLength;
      return undefined;
    }
  };

  return (
    <>
      <Header />
      <Flex className="menu-wrapper" gap="middle" justify="center">
        <Flex
          className="content-wrapper"
          gap="middle"
          justify="center"
          vertical
        >
          <Row gutter={8}>
            <Col span={6} className="wrapper">
              <Button
                style={controllBtnStyle}
                className="shape-button"
                onClick={() => moveShape(shapesData, "left")}
              >
                <div className="shape-triangle-left"></div>
              </Button>
              <div className="tag-wrapper">
                <Tag className="controll-tag">
                  {t(`layoutPage.movePosition`)}
                </Tag>
              </div>
            </Col>
            <Col span={12}>
              <Row className="wrapper">
                <Button
                  style={controllBtnStyle}
                  className="shape-button"
                  onClick={() => movePosition()}
                >
                  <Col span={12} className="button-group">
                    {/* <div className="button-group"> */}
                    <div className="shape-triangle-up"></div>
                    {/* </div> */}
                  </Col>
                  <Col span={12} className="button-group">
                    <div className="shape-triangle-down"></div>
                  </Col>
                </Button>
              </Row>
              <div className="tag-wrapper">
                <Tag className="controll-tag">
                  {t(`layoutPage.changeLayout`)}
                </Tag>
              </div>
            </Col>
            <Col span={6} className="wrapper">
              <Button
                style={controllBtnStyle}
                className="shape-button"
                onClick={() => moveShape(shapesData, "right")}
              >
                <div className="shape-triangle-right"></div>
              </Button>
              <div className="tag-wrapper">
                <Tag className="controll-tag">
                  {t(`layoutPage.movePosition`)}
                </Tag>
              </div>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[8, 8]}>
            {shapesData.map(({ shape, orderIndex }) => (
              <Col
                key={orderIndex}
                span={6}
                offset={calColumnOffset(layoutPosition, orderIndex)}
              >
                <Button
                  key={shape}
                  style={shapeBtnStyle}
                  className="shape-button"
                  onClick={() => shufffleShape(shapesData)}
                >
                  <div className={`shape-${shape}`}></div>
                </Button>
              </Col>
            ))}
          </Row>
        </Flex>
      </Flex>
    </>
  );
};

export default page;
