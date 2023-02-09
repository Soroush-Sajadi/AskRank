import axios from 'axios'
export const getLanguages = async () => {
  const { data } = await axios.get('http://localhost:5000/languages')
  return data
} 