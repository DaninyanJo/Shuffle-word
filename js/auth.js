import Drawer from "./drawer.js";
import Storage from "./storage.js";

class Auth {
  drawer = new Drawer();
  storage = new Storage();

  constructor() {
    this.isLogin()
  }
  // * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  isLogin() {
    if (this.storage.getCurrentUser() != null) {
        this.drawer.closeAuthForm()
    } else{
        this.drawer.showAuthForm()
    }
  }
  // * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  signUp(username) {
    if (this.isValid(username) === false) {
      console.error("Not valid username");
    }else if( this.storage.hasUser(username) === true){
        console.log("Thisn name already used");
    }
     else {
      this.storage.addUser({
        username: username,
        score: 0,
        isLogin: true,
        lastLogin: ''
      });
    }
    this.isLogin()
  }
  // * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  signIn(username) {
      this.storage.getUser(username)
      this.isLogin()
  }

  isValid(username) {
    if (username.length < 3) {
      return false;
    } else {
      return true;
    }
  }
}

export default Auth;
