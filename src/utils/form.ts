import { Language } from "@/stores/slices/pageSlice";
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

type ParamType =
  | UserType[]
  | DataSourceType[]
  | UserType
  | DataSourceType
  | Language
  | undefined;

export const setDataToLocalStorage = (key: string, rawData: ParamType) => {
  localStorage.setItem(key, JSON.stringify(rawData));
};

export const getDataFromLocalStorage = (key: string): ParamType => {
  const userData = localStorage.getItem(key);

  if (userData) {
    return JSON.parse(userData);
  } else return undefined;
};

export const removeDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
