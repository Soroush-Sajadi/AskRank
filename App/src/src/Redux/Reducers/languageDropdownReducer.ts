import { ActionTypes } from '../../Strings'
import { LanguageDropdownAction } from '../Actions/LanguageDropdownAction'
const initState = false
export const languageDropdownReducer = (state: boolean = initState , action: LanguageDropdownAction) :boolean => {
  switch(action.type) {
    case ActionTypes.LANGUAGE_DROPDOWN: {
      return action.payload
    }
    default: 
      return state
  }
}