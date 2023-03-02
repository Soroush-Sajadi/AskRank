import { Population, SortSet } from "../../../Common/Types/CommonTypes"
import { Country } from "../../../Common/Types/Country"
import { words } from "../../../Translate/words"
import sortBy from 'lodash/sortBy'
import { TABLES_NAME } from "../../../Strings"

export const getDataPreparedCountries = (data: Country[], subTopic: string) => {
  const titles = getTitles(data[0], subTopic)
  const translateCode = getTranslateCode(titles)
  const commonData = getCommenData(data)
  const selectedData = getSelectedData(data, subTopic)

  return {
    commonData: commonData,
    selectedData: [{header: words[subTopic], field: subTopic, titles: translateCode, data: selectedData}]
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

export const getCountriesSorted = (countries: Country[], sortSet: SortSet) => {
  if(sortSet.table ===TABLES_NAME.COUNTRIES) {
    const data = sortBy(countries, (country: any) => country[sortSet.column])
    if(sortSet.sortingOption === 'DECS') {
      return data.reverse()
    }
    return data
  }
  const data = sortBy(countries, (country: any) => country[sortSet.table][sortSet.column])
  if(sortSet.sortingOption === 'DECS') {
    return data.reverse()
  }
 return data
}

export const checkIsFocusedColumn = (currentColumn: SortSet, selectedColumn: SortSet) => {
  return (currentColumn.table === selectedColumn.table) && (currentColumn.column === selectedColumn.column)
}

