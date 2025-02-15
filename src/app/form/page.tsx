"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MENUS } from "../constants/menus";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  Table,
  TableProps,
} from "antd";
const { Option } = Select;

type Props = {};

const page = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [form] = Form.useForm();
  const currentPathName = usePathname();

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      gender: "Female",
      mobilePhone: "+66927606499",
      nationality: "Thai",
    },
    {
      key: "2",
      name: "John",
      gender: "Female",
      mobilePhone: "+66927606499",
      nationality: "Thai",
    },
    {
      key: "3",
      name: "Mike",
      gender: "Female",
      mobilePhone: "+66927606499",
      nationality: "Thai",
    },
    {
      key: "4",
      name: "John",
      gender: "Female",
      mobilePhone: "+66927606499",
      nationality: "Thai",
    },
    {
      key: "5",
      name: "Mike",
      gender: "Unisex",
      mobilePhone: "+66927606499",
      nationality: "Thai",
    },
    {
      key: "6",
      name: "John",
      gender: "Male",
      mobilePhone: "+66927606499",
      nationality: "Thai",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Mobile Phone",
      dataIndex: "mobilePhone",
      key: "mobilePhone",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "MANAGE",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          {/* set form */}
          <Button type="text" size="small">
            EDIT
          </Button>
          {/* dispatch deleteUser */}
          <Button type="text" size="small">
            DELETE
          </Button>
        </Space>
      ),
    },
  ];

  // useEffect(() => {
  //   if (currentPathName) {
  //     let menu = MENUS.find(({ pathName }) => pathName === currentPathName);
  //     if (menu) {
  //       setTitle(menu.subTitle);
  //     }
  //   } else setTitle("");
  // }, [currentPathName]);

  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  const onGenderChange = (value: string) => {
    // switch (value) {
    //   case "male":
    //     form.setFieldsValue({ note: "Hi, man!" });
    //     break;
    //   case "female":
    //     form.setFieldsValue({ note: "Hi, lady!" });
    //     break;
    //   case "other":
    //     form.setFieldsValue({ note: "Hi there!" });
    //     break;
    //   default:
    // }
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      {/* <Header title={title} /> */}
      <Header />
      <main className="container">
        <Form
          form={form}
          name="control-hooks"
          style={{ maxWidth: 768 }}
          size="small"
          className="form-wrapper"
        >
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Title" onChange={onGenderChange}>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="firstName"
            label="Firstname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Lastname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Birthday"
            name="birthDate"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item name="citizenId" label="CitizenID" layout="horizontal">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true }]}
            layout="horizontal"
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
            <Input />
          </Form.Item>
          <Form.Item name="passportNo" label="Passport No">
            <Input />
          </Form.Item>
          <Form.Item
            name="expectedSalary"
            label="Expected Salary"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button size="small" onClick={onReset}>
                RESET
              </Button>
              <Button size="small" onClick={onSubmit}>
                SUBMIT
              </Button>
            </Space>
          </Form.Item>
        </Form>
        <Table
          size="small"
          dataSource={dataSource}
          columns={columns}
          pagination={{
            size: "small",
            position: ["topRight"],
            pageSize: 5,
            itemRender: (_, type, originalElement) => {
              if (type === "prev") {
                return <a className="pagination-controller">PREV</a>;
              }
              if (type === "next") {
                return <a className="pagination-controller">NEXT</a>;
              }
              return originalElement;
            },
          }}
          rowSelection={{ type: "checkbox", ...rowSelection }}
        />
      </main>
    </>
  );
};

export default page;
