import { Flex, Select } from "antd";
import React from "react";

type Props = {
  title?: string;
};

const Header = ({ title }: Props) => {
  const langOptions = [
    { value: "en", label: "EN" },
    { value: "th", label: "TH" },
  ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Flex className="header-wrapper" align="center" justify="space-between">
      <h2>{title}</h2>
      <Select
        size="small"
        defaultValue="en"
        style={{ width: "auto" }}
        onChange={handleChange}
        options={langOptions}
      />
    </Flex>
  );
};

export default Header;
