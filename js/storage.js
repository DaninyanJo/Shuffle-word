export default class Storage {
  constructor(params) {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    this.users = JSON.parse(localStorage.getItem("users"));
  }
  //TODO сделать массив где хранятся юзеры

  hasUser(username) {
    let user = this.users.find((user) =>
      user.username === username ? true : false
    );
    
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  addUser(user) {
    const newArr = this.users;
    newArr.push(user);
    localStorage.setItem("users", JSON.stringify(newArr));
    this.setCurrentUser(user)
    
  }
  getUser(username) {
      if(this.hasUser(username)){
        let user = this.users.find((obj) => obj.username === username);
        this.setCurrentUser(user)
      }else{
          console.log("Пользователь не найден");
      }
  }


  setCurrentUser(obj){
      localStorage.setItem('currentUser',JSON.stringify(obj))
  }
  getCurrentUser(){
       return JSON.parse(localStorage.getItem('currentUser'))
    
  }
}
