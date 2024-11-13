export type ITableHeader<T extends object = any> = {
  key: keyof T   | string;
  label: string;
  className?: string;
}[];
