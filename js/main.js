// import { popClose } from "./actions.js"

import Auth from "./auth.js"

const auth = new Auth()


document.querySelector("#btn-signIn").addEventListener('click', e => {
    let username = document.querySelector("#auth-username_input").value
    auth.signIn(username)
})

