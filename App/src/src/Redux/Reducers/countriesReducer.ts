import { ActionTypes } from '../../Strings'
import { CountriesAction } from '../Actions/CountriesAction'
import { Country } from '../../Common/Types/Country'

export const countriesReducer = (state = [] , action: CountriesAction ) :Country[] => {
  switch(action.type) {
    case ActionTypes.COUNTRIES: {
      return action.payload
    }
    default: 
      return state
  }
}