import { Country } from '../../Common/Types/Country'
export type CountriesAction = {
  type: 'COUNTRIES_DATA', 
  payload: Country[] ,
}
