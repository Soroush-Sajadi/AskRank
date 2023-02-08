import { combineReducers, createStore } from 'redux';
import { headerNavigationReducer } from './Reducers/headerNavigationReducer'
import { languageDropdownReducer } from './Reducers/languageDropdownReducer'

const rootReducer = combineReducers({
    headerNavigation: headerNavigationReducer,
    languageDropdown: languageDropdownReducer
  })
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);