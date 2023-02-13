export type SelectedLanguageAction = {
  type: 'SELECTED_LANGUAGE', 
  payload: { 
    name: string;
    code: string
  },
}
