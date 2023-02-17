import { mockDB } from '../Mocks/mockDB'
import { Country } from '../Models/Country'
export const getCountriesDataForRef = (ref: string) => {
  const  countries  = mockDB.countries
  return countries.map((country: Country ) => {
    return {
      id: country.id,
      name: country.name,
      continent: country.continent,
      yearEstimation: country.yearEstimation,
      [ref]: country[ref as keyof Country]
    }
  })
}

