import { mockDB } from '../Mocks/mockDB'
import { Country } from '../Models/Country'


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
