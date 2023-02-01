export interface Economy {
  id: string
  lastEstimation: number
  size: number
  sizeRank: number
  gdp: number
  gdpRank: number
  currency: Currency
  growth: number
}

interface Currency {
  name: string 
  valueBaseUSD: number
  valueBaseEuro: number
  valueBasePound: number
}