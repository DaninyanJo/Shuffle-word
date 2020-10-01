export default class Drawer {
    constructor(params) {
        
    }


    closeAuthForm(){
        document.getElementById('auth').classList.add('isLogin')
    }
    showAuthForm(){
        document.getElementById('auth').classList.remove('isLogin')
    }
};
