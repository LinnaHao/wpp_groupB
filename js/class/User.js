import { BACKEND_URL } from "../config.js"

class User {
  #id = undefined
  #username = undefined

  constructor() {
    const userFromStorage = sessionStorage.getItem('user')
    if (userFromStorage) {
      const userObject = JSON.parse(userFromStorage)
      this.#id = userObject.id
      this.#username = userObject.username
    }
  }

  get id() {
    return this.#id
  }

  get username() {
    return this.#username
  }


  async login(username,password) {
    const data = JSON.stringify({username: username,password: password})
    const response = await fetch(BACKEND_URL + '/user/login',{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: data
    })
    if (response.ok === true) {
      const json = await response.json()
      this.#id = json.id
      this.#username = json.username
      sessionStorage.setItem('user',JSON.stringify(json))
      return this
    } else {
      throw response.statusText
    }
  }

}
export { User }