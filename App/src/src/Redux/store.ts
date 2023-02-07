import { combineReducers, createStore } from 'redux';
import { headerNavigationReducer } from './Reducers/headerNavigationReducer'

const rootReducer = combineReducers({
    headerNavigation: headerNavigationReducer
  })
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);