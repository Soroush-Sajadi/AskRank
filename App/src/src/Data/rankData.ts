import axios from 'axios'

export const getRankData = async (topic: string, ref: string) => {
  const { data } = await axios.get(`http://localhost:5000/options/${topic}/${ref}`)
  return data
}

