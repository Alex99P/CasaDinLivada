import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchUser=()=>axios.get(url);


const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  // console.log("Request",req);
  
  return req;
});


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const bookingHouse = (reqObj) => API.post('/booking/bookingHouse', reqObj);
export const bookingCiubar = (reqObj) => API.post('/booking/bookingCiubar', reqObj);
export const feedback = (reqObj) => API.post('/feedback/post', reqObj);


