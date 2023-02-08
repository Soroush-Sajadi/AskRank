import { ActionTypes } from '../../Strings'
import { HeaderNavigationAction } from '../Actions/HeaderNavigationAction'
const initState = ''
export const headerNavigationReducer = (state: string = initState , action: HeaderNavigationAction) :string => {
  switch(action.type) {
    case ActionTypes.HEADER_NAVIGATION: {
      return action.payload
    }
    default: 
      return state
  }
}