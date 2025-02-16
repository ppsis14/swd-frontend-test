import { UserType, DataSourceType } from "@/stores/slices/userSlice";

export const getDataSource = (rawData: UserType[]) => {
  let dataSource = rawData
    ? rawData.map(({ id, ...data }: UserType) => ({
        ...data,
        key: id,
      }))
    : [];

  return dataSource;
};

type ParameType = UserType[] | DataSourceType[] | UserType | DataSourceType;
export const setDataToLocalStorage = (key: string, rawData: ParameType) => {
  localStorage.setItem(key, JSON.stringify(rawData));
};

export const getDataFromLocalStorage = (key: string): ParameType => {
  const userData = localStorage.getItem(key);

  if (userData) {
    return JSON.parse(userData);
  } else return [];
};

export const removeDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
