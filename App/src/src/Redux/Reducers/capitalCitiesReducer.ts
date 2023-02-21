import { ActionTypes } from '../../Strings'
import { CapitalCities } from '../Actions/CapitalCitiesAction'
import { CapitalCity } from '../../Common/Types/CapitalCity'

export const capitalCitiesReducer = (state = [] , action: CapitalCities ) : CapitalCity[] => {
  switch(action.type) {
    case ActionTypes.CAPITAL_CITIES_DATA: {
      return action.payload
    }
    default: 
      return state
  }
}