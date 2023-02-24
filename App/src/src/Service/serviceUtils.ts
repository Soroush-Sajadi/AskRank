import { Country } from "../Common/Types/Country"

export const getDataPreparedCountries = (data: Country[], subTopic: string) => {
  const titles = getTitles(data[0], subTopic)
  const commonData = getCommenData(data)
  const selectedData = getSelectedData(data, subTopic)
  return {
    commonData: {header: 'Country', titles: ['name', 'continent'], data: commonData},
    selectedData: [{header: subTopic, titles, data: selectedData}]
  }
}

const getCommenData = (data: Country[]) => {
  return data.map((country: Country) => {
    return {
      name: country.name,
      continent: country.continent
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