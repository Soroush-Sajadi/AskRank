import { mockDB } from '../Mocks/mockDB'
import { Country } from '../Models/Country'
import { COUNTRY_PROPERTIES } from './constants'
import sortBy from 'lodash/sortBy'


export const getCountriesDataForRef = (subTopic: string) => {
  const countries  = mockDB.countries
  return countries.map((country: Country ) => {
    return {
      id: country.id,
      name: country.name,
      continent: country.continent,
      yearEstimation: country.yearEstimation,
      code: country.code,
      [subTopic]: country[subTopic as keyof Country]
    }
  })
}
