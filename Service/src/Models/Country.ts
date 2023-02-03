import { Economy } from './Economy'
import { Nature } from './Nature'
import { Population } from './Population'
export interface Country {
  id: string
  name: string
  continent: string
  area: number
  population: Population
  economy: Economy
  age: number
  independent: boolean
  yearIndependency: number
  politicalSystem: string
  nature: Nature
  developmentIndex: number
}