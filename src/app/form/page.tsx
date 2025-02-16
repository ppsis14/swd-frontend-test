"use client";
import React, { useEffect, useState } from "react";
import { UserType, userSelector } from "@/stores/slices/userSlice";
import { useAppDispatch, RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import {
  loadUsers,
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  setSelectedAll,
  setFormData,
  resetFormData,
  setTitle,
  setFirstName,
  setLastName,
  setBirthDate,
  setNationality,
  setCitizenIdFirst,
  setCitizenIdSecond,
  setCitizenIdThird,
  setCitizenIdFourth,
  setCitizenIdFifth,
  setPhoneCountryCode,
  setPhoneNumber,
  setPassportNo,
  setExpectedSalary,
  setGender,
} from "@/stores/slices/userSlice";

import Header from "@/components/Header";
import {
  Button,
  Checkbox,
  CheckboxProps,
  DatePicker,
  Form,
  Input,
  InputProps,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
  Space,
  Table,
  TableProps,
} from "antd";

import dayjs from "dayjs";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { PHONE_COUNTRY_CODE } from "../constants/phoneCountryCode";

type Props = {};

type DataSourceType = Omit<UserType, "id"> & {
  key: string;
};

const page = (props: Props) => {
  const userReducer = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);

  const columns = [
    {
      title: t("formPage.table.column.name"),
      dataIndex: "name",
      key: "name",
      render: (_, { firstName, lastName }: DataSourceType) => (
        <p>{`${firstName} ${lastName}`}</p>
      ),
    },
    {
      title: t("formPage.table.column.gender"),
      dataIndex: "gender",
      key: "gender",
      render: (_, { gender }: DataSourceType) => (
        <p>{t(`formPage.form.gender.options.${gender}`)}</p>
      ),
    },
    {
      title: t("formPage.table.column.mobilePhone"),
      dataIndex: "mobilePhone",
      key: "mobilePhone",
      render: (_, record) => (
        <p>{`${PHONE_COUNTRY_CODE[record.mobilePhone.country].code}${
          record.mobilePhone.phone
        }`}</p>
      ),
    },
    {
      title: t("formPage.table.column.nationality"),
      dataIndex: "nationality",
      key: "nationality",
      render: (_, { nationality }: DataSourceType) => (
        <p>{t(`formPage.form.nationality.options.${nationality}`)}</p>
      ),
    },
    {
      title: t("formPage.table.column.manage"),
      key: "action",
      render: (_, record: DataSourceType) => (
        <Space size="small">
          <Button
            type="text"
            size="small"
            onClick={() => handleEditUser(record)}
          >
            {t("formPage.button.edit")}
          </Button>
          <Button
            type="text"
            size="small"
            onClick={() => handleDeleteUser(record.key)}
          >
            {t("formPage.button.delete")}
          </Button>
        </Space>
      ),
    },
  ];

  const titleOptions = [
    { value: "mr", label: t("formPage.form.title.options.mr") },
    { value: "mrs", label: t("formPage.form.title.options.mrs") },
    { value: "ms", label: t("formPage.form.title.options.ms") },
  ];
  const nationOptions = [
    { value: "thai", label: t("formPage.form.nationality.options.thai") },
    { value: "french", label: t("formPage.form.nationality.options.french") },
    {
      value: "american",
      label: t("formPage.form.nationality.options.american"),
    },
  ];
  const genderOptions = [
    { value: "male", label: t("formPage.form.gender.options.male") },
    { value: "female.", label: t("formPage.form.gender.options.female") },
    { value: "unisex", label: t("formPage.form.gender.options.unisex") },
  ];

  const phoneCountryCodeOptions = [
    { value: "th", label: "🇹🇭+66" },
    { value: "us", label: "🇺🇸+1" },
    { value: "fr", label: "🇫🇷+33" },
  ];

  const rowSelection: TableProps<DataSourceType>["rowSelection"] = {
    selectedRowKeys,
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: DataSourceType[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  const hasSelected = selectedRowKeys.length > 0;

  const onTitleChange = (value: string) => {
    console.log(`selected ${value}`);
    dispatch(setTitle({ value }));
  };
  const onFirstNameChange: InputProps["onChange"] = (e) => {
    console.log(`firstnam: ${e.target.value}`);
    dispatch(setFirstName({ value: e.target.value }));
  };
  const onLastNameChange: InputProps["onChange"] = (e) => {
    console.log(`lastname: ${e.target.value}`);
    dispatch(setLastName({ value: e.target.value }));
  };
  const onBirthDateChange = (value) => {
    console.log("date:", value, dayjs(value).format("YYYY-MM-DD"));
    dispatch(setBirthDate({ value }));
  };
  const onNationalityChange = (value: string) => {
    console.log(`selected ${value}`);
    dispatch(setNationality({ value }));
  };
  const onGenderChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
    dispatch(setGender({ value: e.target.value }));
  };
  const onCitizenIdFirstChange: InputProps["onChange"] = (e) => {
    console.log(`onCitizenIdFirstChange: ${e.target.value}`);
    dispatch(setCitizenIdFirst({ value: e.target.value }));
  };
  const onCitizenIdSecondChange: InputProps["onChange"] = (e) => {
    console.log(`onCitizenIdSecondChange: ${e.target.value}`);
    dispatch(setCitizenIdSecond({ value: e.target.value }));
  };
  const onCitizenIdThirdChange: InputProps["onChange"] = (e) => {
    console.log(`onCitizenIdThirdChange: ${e.target.value}`);
    dispatch(setCitizenIdThird({ value: e.target.value }));
  };
  const onCitizenIdFourthChange: InputProps["onChange"] = (e) => {
    console.log(`onCitizenIdFourthChange: ${e.target.value}`);
    dispatch(setCitizenIdFourth({ value: e.target.value }));
  };
  const onCitizenIdFifthChange: InputProps["onChange"] = (e) => {
    console.log(`onCitizenIdFifthChange: ${e.target.value}`);
    dispatch(setCitizenIdFifth({ value: e.target.value }));
  };
  const onCountryCodeChange = (value: string) => {
    console.log(`selected ${value}`);
    dispatch(setPhoneCountryCode({ value }));
  };
  const onPhoneNumberChange: InputProps["onChange"] = (e) => {
    console.log(`phone no: ${e.target.value}`);
    dispatch(setPhoneNumber({ value: e.target.value }));
  };
  const onPassportNoChange: InputProps["onChange"] = (e) => {
    console.log(`passportNo: ${e.target.value}`);
    dispatch(setPassportNo({ value: e.target.value }));
  };
  const onExpectedSalaryChange: InputProps["onChange"] = (e) => {
    console.log(`expectedSalary: ${e.target.value}`);
    dispatch(setExpectedSalary({ value: e.target.value }));
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    console.log("before:", userReducer.isSelectedAll);
    dispatch(setSelectedAll({ value: e.target.checked }));
  };

  const onSubmit = () => {
    console.log(userReducer.formData);
    dispatch(addUser(userReducer.formData));
    form.resetFields();
  };

  const onReset = () => {
    dispatch(resetFormData());
    form.resetFields();
  };

  const initDataSource = (userData: UserType[]) => {
    // return userData
    //   ? userData.map(
    //       ({ id, firstName, lastName, mobilePhone, ...data }: UserType) => ({
    //         ...data,
    //         key: id,
    //         // name: `${firstName} ${lastName}`,
    //         // mobilePhoneNumber: mobilePhone.phone,
    //       })
    //     )
    //   : [];

    setDataSource([
      {
        key: "1",
        title: "mr",
        firstName: "Smith",
        lastName: "Test",
        birthDate: "2025-10-03",
        nationality: "thai",
        gender: "male",
        mobilePhone: {
          country: "th",
          phone: "987654321",
        },
        expectedSalary: "40000",
        citizenId: {
          first: "1",
          second: "1234",
          third: "12345",
          fourth: "12",
          fifth: "1",
        },
        passportNo: "0000000000000",
      },
      {
        key: "2",
        title: "mr",
        firstName: "Smith2",
        lastName: "Test2",
        birthDate: "2025-10-02",
        nationality: "french",
        gender: "female",
        mobilePhone: {
          country: "fr",
          phone: "987654321",
        },
        expectedSalary: "50000",
        citizenId: {
          first: "1",
          second: "2222",
          third: "44444",
          fourth: "11",
          fifth: "7",
        },
        passportNo: "0000000000000",
      },
    ]);
  };
  const handleDeleteAllUser = () => {
    if (
      userReducer.isSelectedAll ||
      selectedRowKeys.length === dataSource.length
    ) {
      dispatch(deleteAllUsers());
      dispatch(setSelectedAll({ value: false }));
      setSelectedRowKeys([]);
    } else if (hasSelected) {
      handleDeleteUser(selectedRowKeys);
    }
  };

  const handleDeleteUser = (ids: React.Key[] | string) => {
    dispatch(deleteUser({ ids }));

    // const notSelectedData =  dataSource.filter(
    //   (data) => !selectedRowKeys.includes(data.key)
    // );

    // const deleteItems = await dataSource.filter((data) =>
    //   selectedRowKeys.includes(data.key)
    // );

    //  setDataSource(notSelectedData);

    // setSelectedRowKeys([]);
  };

  const handleEditUser = ({ key, ...record }: DataSourceType) => {
    const formData = {
      id: key,
      ...record,
    };
    console.log("handleEditUser -> formData:", formData);

    dispatch(setFormData({ formData }));

    const {
      title,
      firstName,
      lastName,
      birthDate,
      nationality,
      gender,
      mobilePhone: { country, phone },
      expectedSalary,
      citizenId: { first, second, third, fourth, fifth },
      passportNo,
    } = record;

    form.setFieldsValue({
      title,
      firstName,
      lastName,
      birthDate: dayjs(birthDate),
      nationality,
      gender,
      mobilePhoneCode: PHONE_COUNTRY_CODE[country].label || undefined,
      mobilePhoneNo: phone,
      expectedSalary,
      citizenIdFirst: first,
      citizenIdSecond: second,
      citizenIdThird: third,
      citizenIdFourth: fourth,
      citizenIdFifth: fifth,
      passportNo,
    });
  };

  useEffect(() => {
    dispatch(loadUsers());
    if (userReducer.data) {
      initDataSource(userReducer.data);
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Link href={"/"} className="home-button">
          <Button size="small">{t("formPage.button.home")}</Button>
        </Link>
        <Form
          form={form}
          name="user-form"
          style={{ maxWidth: 768 }}
          size="small"
          className="form-wrapper"
        >
          <Space>
            <Form.Item
              name="title"
              label={t("formPage.form.title.label")}
              rules={[{ required: true }]}
            >
              <Select
                placeholder={t("formPage.form.title.placeholder")}
                onChange={onTitleChange}
                options={titleOptions}
                style={{ width: 100 }}
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="firstName"
              label={t("formPage.form.firstName.label")}
              rules={[{ required: true }]}
            >
              <Input onChange={onFirstNameChange} />
            </Form.Item>
            <Form.Item
              name="lastName"
              label={t("formPage.form.lastName.label")}
              rules={[{ required: true }]}
            >
              <Input onChange={onLastNameChange} />
            </Form.Item>
          </Space>
          <Space>
            <Form.Item
              label={t("formPage.form.birthDate.label")}
              name="birthDate"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <DatePicker
                onChange={onBirthDateChange}
                format={"YYYY-MM-DD"}
                placeholder={t("formPage.form.birthDate.placeholder")}
              />
            </Form.Item>
            <Form.Item
              name="nationality"
              label={t("formPage.form.nationality.label")}
              rules={[{ required: true }]}
            >
              <Select
                placeholder={t("formPage.form.nationality.placeholder")}
                onChange={onNationalityChange}
                options={nationOptions}
                style={{ width: 300 }}
              />
            </Form.Item>
          </Space>

          <Form.Item name="gender" label="Gender">
            <Radio.Group onChange={onGenderChange} options={genderOptions} />
          </Form.Item>
          <Space size="small" align="start">
            <Form.Item
              name="citizenIdFirst"
              label={t("formPage.form.citizenId.label")}
            >
              <Input
                style={{ width: 50, textAlign: "center" }}
                maxLength={1}
                onChange={onCitizenIdFirstChange}
              />
            </Form.Item>
            {"-"}
            <Form.Item name="citizenIdSecond">
              <Input
                style={{ width: 100, textAlign: "center" }}
                maxLength={4}
                onChange={onCitizenIdSecondChange}
              />
            </Form.Item>
            {"-"}
            <Form.Item name="citizenIdThird">
              <Input
                style={{ width: 125, textAlign: "center" }}
                maxLength={5}
                onChange={onCitizenIdThirdChange}
              />
            </Form.Item>
            {"-"}
            <Form.Item name="citizenIdFourth">
              <Input
                style={{ width: 75, textAlign: "center" }}
                maxLength={2}
                onChange={onCitizenIdFourthChange}
              />
            </Form.Item>
            {"-"}
            <Form.Item name="citizenIdFifth">
              <Input
                style={{ width: 50, textAlign: "center" }}
                maxLength={1}
                onChange={onCitizenIdFifthChange}
              />
            </Form.Item>
          </Space>

          <Space size="small" align="start">
            <Form.Item
              name="mobilePhoneCode"
              label={t("formPage.form.mobilePhone.label")}
              rules={[{ required: true }]}
            >
              <Select
                onChange={onCountryCodeChange}
                options={phoneCountryCodeOptions}
                // value={userReducer.formData.mobilePhone.country}
                style={{ width: 100 }}
              />
            </Form.Item>
            {"-"}
            <Form.Item name="mobilePhoneNo">
              <Input onChange={onPhoneNumberChange} />
            </Form.Item>
          </Space>
          <Form.Item
            name="passportNo"
            label={t("formPage.form.passportNo.label")}
          >
            <Input style={{ width: 200 }} onChange={onPassportNoChange} />
          </Form.Item>
          <div className="custom-form-item">
            <Form.Item
              name="expectedSalary"
              label={t("formPage.form.expectedSalary.label")}
              rules={[{ required: true }]}
            >
              <Input style={{ width: 200 }} onChange={onExpectedSalaryChange} />
            </Form.Item>
            <div className="button-item">
              <Button size="small" onClick={onReset}>
                {t("formPage.button.reset")}
              </Button>
              <Button size="small" onClick={onSubmit}>
                {t("formPage.button.submit")}
              </Button>
            </div>
          </div>
        </Form>
        <div className="table-wrapper">
          <Space>
            <Checkbox
              onChange={onCheckAllChange}
              checked={userReducer.isSelectedAll}
            >
              {t("formPage.checkbox.selectAll")}
            </Checkbox>
            <Button size="small" onClick={handleDeleteAllUser}>
              {t("formPage.button.delete")}
            </Button>
          </Space>
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
                  return (
                    <a className="pagination-controller">
                      {t("formPage.button.prev")}
                    </a>
                  );
                }
                if (type === "next") {
                  return (
                    <a className="pagination-controller">
                      {t("formPage.button.next")}
                    </a>
                  );
                }
                return originalElement;
              },
            }}
            rowSelection={rowSelection}
          />
        </div>
      </div>
    </>
  );
};

export default page;
