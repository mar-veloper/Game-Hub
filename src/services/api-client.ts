import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'dce6ecf01c4a4b328d55fbe86a55b22d',
  },
})
