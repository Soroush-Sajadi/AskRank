import { ActionTypes } from '../../Strings'
import { SubTopicAction } from '../Actions/subTopicAction'
const initState = ''
export const subTopicReducer = (state: string = initState , action: SubTopicAction) :string => {
  switch(action.type) {
    case ActionTypes.SUB_TOPIC: {
      return action.payload
    }
    default: 
      return state
  }
}