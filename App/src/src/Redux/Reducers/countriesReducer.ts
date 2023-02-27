import { ActionTypes } from '../../Strings'
import { CountriesAction } from '../Actions/CountriesAction'
import { CountryForTable } from '../../Common/Types/Country'


export const countriesReducer = (state = {} , action: CountriesAction ) :CountryForTable | {} => {
  switch(action.type) {
    case ActionTypes.COUNTRIES: {
      return action.payload
    }
    default: 
      return state
  }
}