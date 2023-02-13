import { ActionTypes } from '../../Strings'
import { SelectedSecondaryOptionAction } from '../Actions/SelectedSecondaryOptionAction'
const initState = ''
export const selectedSecondaryOptionReducer = (state: string = initState , action: SelectedSecondaryOptionAction) :string => {
  switch(action.type) {
    case ActionTypes.Selected_Secondary_Option: {
      return action.payload
    }
    default: 
      return state
  }
}