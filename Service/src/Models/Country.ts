import { Economy } from './Economy'
import { Nature } from './Nature'
import { Population, LanguageItem, ReligionItem } from './Population'
export interface Country {
  name: string
  continent: string
  area: number
  population: Population
  language: LanguageItem[]
  religion: ReligionItem[]
  economy: Economy
  age: number
  independent: boolean
  yearIndependency: number
  politicalSystem: string
  nature: Nature
  developmentIndex: number
}