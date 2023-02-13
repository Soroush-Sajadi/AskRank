import { ActionTypes } from '../../Strings'
import { SelectedPrimeryOptionAction } from '../Actions/SelectedPrimeryOptionAction'
const initState = ''
export const selectedPrimeryOptionReducer = (state: string = initState , action: SelectedPrimeryOptionAction) :string => {
  switch(action.type) {
    case ActionTypes.Selected_Primery_Option: {
      return action.payload
    }
    default: 
      return state
  }
}