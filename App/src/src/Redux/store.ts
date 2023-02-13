import { combineReducers, createStore } from 'redux';
import { headerNavigationReducer } from './Reducers/headerNavigationReducer'
import { languageDropdownReducer } from './Reducers/languageDropdownReducer'
import { languagesReducer } from './Reducers/languagesReducer';
import { selectedLanguageReducer } from './Reducers/selectedLanguageReducer';
import { selectedPrimeryOptionReducer } from './Reducers/selectedPrimeryOptionsReducer';
import { selectedSecondaryOptionReducer } from './Reducers/selectedSecondaryOptionReducer'


const rootReducer = combineReducers({
  headerNavigation: headerNavigationReducer,
  languageDropdown: languageDropdownReducer,
  languages: languagesReducer,
  selectedLanguage: selectedLanguageReducer,
  selectedPrimeryOption: selectedPrimeryOptionReducer,
  selectedSecondaryOption: selectedSecondaryOptionReducer
})
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);