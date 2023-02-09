import { ActionTypes, defaultLanguage } from '../../Strings'
import { SelectedLanguageAction } from '../Actions/SelectedLanguageAction'
const initState = defaultLanguage
export const selectedLanguageReducer = (state: string = initState , action: SelectedLanguageAction) :string => {
  switch(action.type) {
    case ActionTypes.SELECTED_LANGUAGE: {
      return action.payload
    }
    default: 
      return state
  }
}