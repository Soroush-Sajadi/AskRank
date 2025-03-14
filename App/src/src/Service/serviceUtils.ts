import { Country } from "../Common/Types/Country"
import { words } from "../Translate/words"

export const getDataPreparedCountries = (data: Country[], subTopic: string) => {
  const titles = getTitles(data[0], subTopic)
  const translateCode = getTranslateCode(titles)
  const commonData = getCommenData(data)
  const selectedData = getSelectedData(data, subTopic)

  return {
    commonData: commonData,
    selectedData: [{header: words[subTopic], titles: translateCode, data: selectedData}]
  }
}

const getCommenData = (data: Country[]) => {
  return data.map((country: Country) => {
    return {
      name: country.name,
      continent: country.continent,
      code: country.code
    }
  })
}

const getSelectedData = (data: Country[], subTopic: string) => {
  return data.map((country: any) => {
    return country[subTopic]
  })
}

const getTitles = (data: any, subTopic: string ) => {
  return Object.keys(data[subTopic])
}

const getTranslateCode = (titles: string[]) => {
  return titles.map((title: string) => {
    return {
      field: title,
      header: words[title]
    } 
  })
}