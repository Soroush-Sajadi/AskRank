import { combineReducers, createStore } from 'redux'
import { headerNavigationReducer } from './Reducers/headerNavigationReducer'
import { languageDropdownReducer } from './Reducers/languageDropdownReducer'
import { languagesReducer } from './Reducers/languagesReducer'
import { selectedLanguageReducer } from './Reducers/selectedLanguageReducer'
import { topicReducer } from './Reducers/topicReducer'
import { subTopicReducer } from './Reducers/subTopicReducer'
import { capitalCitiesReducer } from './Reducers/capitalCitiesReducer'
import { countriesReducer } from './Reducers/countriesReducer'
import { sortOrderReducer } from './Reducers/sortOrderReducer'

const rootReducer = combineReducers({
  headerNavigation: headerNavigationReducer,
  languageDropdown: languageDropdownReducer,
  languages: languagesReducer,
  selectedLanguage: selectedLanguageReducer,
  topic: topicReducer,
  subTopic: subTopicReducer,
  countries: countriesReducer,
  capitalCities: capitalCitiesReducer,
  sortSet: sortOrderReducer
})
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);