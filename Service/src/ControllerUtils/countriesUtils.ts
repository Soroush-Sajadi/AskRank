import { mockDB } from '../Mocks/mockDB'
import { Country } from '../Models/Country'
import { COUNTRY_PROPERTIES } from './constants'
import sortBy from 'lodash/sortBy'


export const getCountriesDataForRef = (subTopic: string) => {
  const countries  = mockDB.countries
  const soretedCountries = getCountriesSorted(countries, subTopic)
  return soretedCountries.map((country: Country ) => {
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

const getCountriesSorted = (countries: Country[], subTopic: string) => {
  if(subTopic === COUNTRY_PROPERTIES.POPULATION) {
    return sortBy(countries, (country) => country.population.amount).reverse()
  }
  if(subTopic === COUNTRY_PROPERTIES.MEDIAN_AGE) {
    return sortBy(countries, (country) => country.medianAge.total).reverse()
  }
  if(subTopic === COUNTRY_PROPERTIES.FERTILITY_RATE) {
    return sortBy(countries, (country) => country.fertilityRate.today).reverse()
  }
}