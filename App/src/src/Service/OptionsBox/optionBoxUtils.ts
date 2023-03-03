import { DataTopics, ActionTypes } from 'src/Strings'

export const dispatchData = (topic: string, subTopic: string ,payload: any , dispatch: (action: {type: string, payload: any}) => void) => {
  const [key] = Object.entries( payload[0][subTopic])[0];

  if(topic.toLocaleLowerCase() === DataTopics.COUNTRIES) {
    dispatch({type: ActionTypes.COUNTRIES , payload })
    dispatch({type: ActionTypes.SORT_SET, payload: {table: subTopic, column: key, sortingOption: 'DECS'}})
  }
  if(topic === DataTopics.CAPITAL_CITIES) {
    dispatch({type: ActionTypes.CAPITAL_CITIES_DATA , payload })
  } 
}