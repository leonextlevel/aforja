import axios from 'axios'

import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: 'http://192.168.0.75:8000',
})


api.interceptors.request.use(async config => {
  if (!config.url.includes('token')){
    const token = await AsyncStorage.getItem('@Forja:access');
    
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api;