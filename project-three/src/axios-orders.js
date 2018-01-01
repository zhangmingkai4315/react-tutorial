import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://reactburger-780bc.firebaseio.com/'
})

export default instance;

