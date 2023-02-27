import { Country } from '../../Common/Types/Country'
import { CountryForTable } from '../../Common/Types/Country'

export type CountriesAction = {
  type: 'COUNTRIES', 
  payload: CountryForTable ,
}
