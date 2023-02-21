import { captions } from './captions'
import { useSelector } from 'react-redux'
import { SelectedLanguage } from '../Common/Types/service'


export const translate = (caption: string): string => {
  const { selectedLanguage }  = useSelector((state: {selectedLanguage: SelectedLanguage}) => state)
  return captions[selectedLanguage.code][caption]

}