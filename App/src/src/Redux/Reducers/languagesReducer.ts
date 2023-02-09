import { getLanguages } from '../../Data/languages'

export const languagesReducer = async () => {
  return await getLanguages().then(res => res)
}