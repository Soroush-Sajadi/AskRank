import { captions } from './captions'
import { store } from '../Redux/store'

export const translate = (caption: string): string => {
  const langCode = store.getState().selectedLanguage.code
  return captions[langCode][caption]
}