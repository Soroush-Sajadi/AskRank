import { ActionTypes, defaultLanguage } from '../../Strings'
import { SelectedLanguageAction } from '../Actions/SelectedLanguageAction'
interface SelectedLanguage {
  name: string
  code: string
}

const initState = {
  name: 'English',
  code: 'gb'
}

export const selectedLanguageReducer = (state:SelectedLanguage = initState , action: SelectedLanguageAction) :SelectedLanguage => {
  switch(action.type) {
    case ActionTypes.SELECTED_LANGUAGE: {
      return action.payload
    }
    default: 
      return state
  }
}