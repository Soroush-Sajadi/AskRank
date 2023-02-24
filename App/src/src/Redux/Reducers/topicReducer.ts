import { ActionTypes } from '../../Strings'
import { TopicAction } from '../Actions/topicAction'
const initState = ''
export const topicReducer = (state: string = initState , action: TopicAction) :string => {
  switch(action.type) {
    case ActionTypes.TOPIC: {
      return action.payload
    }
    default: 
      return state
  }
}