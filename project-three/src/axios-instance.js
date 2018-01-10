import axios from 'axios'

export const axiosOrders = axios.create({baseURL: 'https://reactburger-780bc.firebaseio.com/'})
export const axiosAuth = axios.create({baseURL: 'https://www.googleapis.com/'})
export const apiConfig = {
  apiKey: "AIzaSyDx7vD8QdXrfIRyYzV96T0pB8kOer1QyBU",
  authDomain: "reactburger-780bc.firebaseapp.com",
  databaseURL: "https://reactburger-780bc.firebaseio.com",
  projectId: "reactburger-780bc",
  storageBucket: "reactburger-780bc.appspot.com",
  messagingSenderId: "512590777834"
};