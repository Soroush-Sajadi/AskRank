export interface Population {
  lastEstimation: number
  amount: number
  fertilityRate: number
  populationYearFifty: number
  ethnicGroups: EthnicGroupItem[]
}

interface EthnicGroupItem {
  name: string 
  amount: number
  percentage: number
  religions: ReligionItem[]
  language: LanguageItem[]
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