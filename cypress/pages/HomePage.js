class HomePage {

    elements = {
    logIn: () => cy.get("#login2"),
    logInUser: () => cy.get("#loginusername"),
    logInPassword: () => cy.get("#loginpassword"),
    logInButton:() => cy.get("#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"),
    userName:() => cy.get("#nameofuser"),
    signUp:() => cy.get("#signin2"),
    signUpUser:() => cy.get("#sign-username"),
    signUpPassword:() => cy.get("#sign-password"),
    signUpButton:() => cy.get("#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"),
    logOut:() => cy.get("#logout2"),
    laptopButton:() => cy.get(`[onclick="byCat('notebook')`),
    productBox:() => cy.get("#tbodyid"),
    cart:() => cy.get("#cartur")
    }

    getLogIn() {
        this.elements.logIn()
    }
    clickLogIn(){
        this.elements.logIn().click()
    }
    typeUserName(username){
        this.elements.logInUser().type(username)
    }
    typePassword(password){
        this.elements.logInPassword().type(password)
    }
    clickLogInButton(){
        this.elements.logInButton().click()
    }
    validateUserName(username){
        this.elements.userName().should("contain", username)
    }
    clickSignUp(){
        this.elements.signUp().click()
    }
    typeNewUserName(username){
        this.elements.signUpUser().type(username)
    }
    typeNewPassword(password){
        this.elements.signUpPassword().type(password)
    }
    clickSignUpButton(){
        this.elements.signUpButton().click()
    }
    clickLogOut(){
        this.elements.logOut().click()
    }
    clickLaptopOption(){
        this.elements.laptopButton().click()
    }
    getProductBox(product){
        this.elements.productBox().contains(product).click()
    }
    clickCart(){
        this.elements.cart().click()
    }

}

module.exports = new HomePage()