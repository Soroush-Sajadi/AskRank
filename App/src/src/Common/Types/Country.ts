import { FertilityRate, Population, MedianAge } from './CommonTypes'
export interface Country {
  id: string
  name: string,
  continent: string,
  yearEstimation: number,
  code: string,
  population?: Population
  fertilityRate?: FertilityRate
  medianAge?: MedianAge
}

export interface CountryForTable {
  commonData:  {
      name: string
      continent: string
      code: string
    }[]
  selectedData: {
    data: {
      amount: number
      populationYearFifty: number
    }[]
    header: string
    titles: {
      field: string
      header: string
    }[]
  }[]
}
