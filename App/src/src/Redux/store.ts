import { combineReducers, createStore } from 'redux';
import { headerNavigationReducer } from './Reducers/headerNavigationReducer'
import { languageDropdownReducer } from './Reducers/languageDropdownReducer'
import { languagesReducer } from './Reducers/languagesReducer';
import { selectedLanguageReducer } from './Reducers/selectedLanguageReducer';

const rootReducer = combineReducers({
    headerNavigation: headerNavigationReducer,
    languageDropdown: languageDropdownReducer,
    languages: languagesReducer,
    selectedLanguage: selectedLanguageReducer
  })
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);