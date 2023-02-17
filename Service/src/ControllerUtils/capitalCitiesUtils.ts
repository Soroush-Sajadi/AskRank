import { mockDB } from '../Mocks/mockDB'
import { CapitalCities } from '../Models/CapitalCities'
export const getCapitalCitiesDataForRef = (ref: string) => {
  const  capitalCities  = mockDB.capitalCities
  return capitalCities.map((city: CapitalCities ) => {
    return {
      id: city.id,
      name: city.name,
      continent: city.continent,
      yearEstimation: city.yearEstimation,
      [ref]: city[ref as keyof CapitalCities]
    }
  })
}
