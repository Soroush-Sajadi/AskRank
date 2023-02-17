export interface SelectedLanguage {
  name: string
  code: string
}

export interface OptionItem {
  name: string
  val: string
  linkedOptions: LinkedOptionItem[]
}

export interface LinkedOptionItem {
  title: string
  val: string
}
