import { DataTopics, ActionTypes } from '../../Strings'
import { getDataPreparedCountries } from '../Topics/Countries/countriesUtils'
import { CountryForTable } from '../../Common/Types/Country'



export const dispatchData = (topic: string, subTopic: string ,payload: any , dispatch: (action: {type: string, payload: any}) => void) => {

  if(topic.toLocaleLowerCase() === DataTopics.COUNTRIES) {
    const data: CountryForTable = getDataPreparedCountries(payload, subTopic)
    dispatch({type: ActionTypes.COUNTRIES , payload: data })
  }
  if(topic === DataTopics.CAPITAL_CITIES) {
    dispatch({type: ActionTypes.CAPITAL_CITIES_DATA , payload })
  } 
}