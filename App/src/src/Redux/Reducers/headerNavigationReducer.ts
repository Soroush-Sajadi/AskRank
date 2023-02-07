import { HeaderNavigation } from '../../Strings'
import { HeaderNavigationAction } from '../Actions/HeaderNavigationAction'
export const headerNavigationReducer = (state: string = HeaderNavigation.Home , action: HeaderNavigationAction) :string => {
  switch(action.type) {
    case 'HEADER_NAVIGATION': {
      return action.payload
    }
    default: 
      return state
  }
}