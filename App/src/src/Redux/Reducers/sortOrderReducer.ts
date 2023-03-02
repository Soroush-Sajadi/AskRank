import { SortSet } from '../../Common/Types/CommonTypes'
import { ActionTypes } from '../../Strings'
import { SortSetAction } from '../Actions/SortSetAction'
const initState = {
  table: '',
  column: '',
  sortingOption: ''
}

export const sortOrderReducer = (state: SortSet = initState , action: SortSetAction) :SortSet => {
  switch(action.type) {
    case ActionTypes.SORT_SET: {
      return action.payload
    }
    default: 
      return state
  }
}
