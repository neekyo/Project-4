import axios from 'axios'
import serverURL from './configServer'

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : 'http://localhost:5000/api',
  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem('user') != null
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  // This method signs up and logs in the user
  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  login(username, password) {
    console.log("LOGGING IN ATTEMPT", username, password)
    return service
      .post('/login', {
        username,
        password,
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  logout() {
    localStorage.removeItem('user')
    return service.get('/logout')
  },

  getBeers() {
    console.log('called')
    return service
      .get('/getTheBeers')
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(errHandler)
  },

  getBreweries(){
    console.log('hi')
    return service
      .get('/breweries')
      .then(res => res.data)
      .catch(errHandler)
  },

  addCountry(body) {
    return service
      .post('/countries', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  getprofile() {
    return service
      .get('/profile')
      .then(res => res.data)
      .catch(errHandler)
  },

  getAllUsers() {
    return service
    .get('/getAllTheUsers')
    .then(res => res.data)
    .catch(errHandler)
  },

  addPicture(file) {
    const formData = new FormData()
    formData.append('picture', file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },

  test(){
    console.log("what about this?")
    return service
    .get('/breweries')
    .then(res => {
    })
    .catch(errHandler)
  },

  getBeer(){
    console.log("one step closer")
   return service.get('/breweries/test')
    .then(res => {
      console.log('anything')
      console.log(res)
    })
    .catch(errHandler)
  }



}


