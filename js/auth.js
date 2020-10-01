class Auth {

    constructor(){
        this.isStorageNull()
        this.isLogin()
        this.user = this.user
    }
    isStorageNull(){
        console.log("Pusto");
        if (localStorage.getItem('user') === null){
            const user = {
                username: '',
                isLogin: false
            }
            localStorage.setItem('user', JSON.stringify(user))
            
        }
    }
    
    isLogin(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user.isLogin){
            document.getElementById('auth').classList.add('isLogin')
        }
    }
    signIn(username){
        const user = {
            username: username,
            isLogin: true
        }
        localStorage.setItem('user', JSON.stringify(user))
    }
    signUp(){

    }
}







export default Auth