import axios from 'axios'

export const getOptions = async (lang: string = 'gb') => {
  const { data } = await axios.get(`http://localhost:5000/options/${lang}`)
  return data
}

export const fetchDataForSelectedOptions = async (primeryOption: string, secondaryOption: string) => {
  const { data } = await axios.get(`http://localhost:5000/options/data/${primeryOption}/${secondaryOption}`)
  return data
}
