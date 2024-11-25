type Comp =
  | {
      type: 'checkbox'
      value: boolean
      onChange?: (event: Event) => void
    }
  | {
      type: 'text'
      value: string
      onChange?: (event: Event) => void
    }

type Icons = 'edit' | 'delete'

export type ITableHeader<T extends object = any> = {
  key: keyof T | string
  label: string
  className?: string
  render?: (value: T) => Comp
  renderItem?: (value: T) => string
  actions?: {
    onClick: (value: T) => void
    label?: string
    icon?: Icons
  }[]
}[]
