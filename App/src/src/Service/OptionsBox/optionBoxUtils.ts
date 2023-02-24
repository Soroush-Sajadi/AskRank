import { DataTopics, ActionTypes } from '../../Strings'

export const dispatchData = (topic: string, payload: any , dispatch: (action:{type: string, payload: any}) => void) => {
  if(topic.toLocaleLowerCase() === DataTopics.Countires) {
    dispatch({type: ActionTypes.COUNTRIES , payload })
  }
  if(topic === DataTopics.Capital_Cities) {
    dispatch({type: ActionTypes.CAPITAL_CITIES_DATA , payload })
  } 
}