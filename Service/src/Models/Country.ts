import {FertilityRate, Population, MedianAge} from './CommonTypes'
export interface Country {
  id: string
  name: string,
  continent: string,
  yearEstimation: number,
  code: string,
  population: Population
  fertilityRate: FertilityRate
  medianAge: MedianAge
}
