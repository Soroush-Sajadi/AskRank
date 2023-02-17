export interface Population {
  id: string
  lastEstimation: number
  name: string
  amount: number
  fertilityRate: number
  medianAge: MedianAge
  populationYearFifty: number
  ethnicGroups: EthnicGroupItem[]
  religions: ReligionItem[]
  language: LanguageItem[]
}

interface EthnicGroupItem {
  name: string 
  amount: number
  percentage: number
}

export interface ReligionItem {
  name: string
  amount: number
  percentage: number
}

export interface LanguageItem {
  name: string
  amount: number
  percentage: number
  family: number
  official: boolean
}

interface MedianAge {
  male: number
  female: number
  total: number
}