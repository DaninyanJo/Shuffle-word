// import { popClose } from "./actions.js"

import Auth from "./auth.js"
import Storage from "./storage.js"

const auth = new Auth()
const stor = new Storage()

document.querySelector("#btn-signUp").addEventListener('click', e => {
    let username = document.querySelector("#auth-username_input").value
    auth.signUp(username)
    
})
document.querySelector("#btn-signIn").addEventListener('click', e => {
    let username = document.querySelector("#auth-username_input").value
    auth.signIn(username)
    
})
document.querySelector("#logOut").addEventListener('click', e => {
    localStorage.removeItem('currentUser')
    auth.isLogin()
})
