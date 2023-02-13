export interface SelectedLanguage {
  name: string
  code: string
}

export interface OptionItem {
  name: string
  linkedOptions: {name: string}[]
}
