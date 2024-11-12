export type ITableHeader<T extends object = any> = {
  key: keyof T;
  label: string;
  className?: string;
}[];
