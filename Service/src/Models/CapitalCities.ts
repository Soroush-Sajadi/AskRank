import {FertilityRate, Population, MedianAge} from './CommonTypes'

export interface CapitalCities {
  id: string
  name: string,
  continent: string,
  yearEstimation: number,
  population: Population
  fertilityRate: FertilityRate
  medianAge: MedianAge
}

