import { DataTopics, ActionTypes } from '../../Strings'
export const dispatchData = (topic: string, payload: any) => {
  if(topic === DataTopics.Countires) {
    return {type: ActionTypes.COUNTRIES_DATA , payload }
  }
  if(topic === DataTopics.Capital_Cities) {
    return {type: ActionTypes.CAPITAL_CITIES_DATA , payload }
  } 
}