import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://mikrosat.de/` // `http://localhost:8000`
  })
}
