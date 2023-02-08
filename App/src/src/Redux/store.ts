import { combineReducers, createStore } from 'redux';
import { headerNavigationReducer } from './Reducers/headerNavigationReducer'
import { languageDropdownReducer } from './Reducers/languageDropdownReducer'
import { languagesReducer } from './Reducers/languagesReducer';

const rootReducer = combineReducers({
    headerNavigation: headerNavigationReducer,
    languageDropdown: languageDropdownReducer,
    languages: languagesReducer
  })
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);