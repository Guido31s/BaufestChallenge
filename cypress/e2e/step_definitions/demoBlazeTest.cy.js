import HomePage from "../../pages/HomePage"
import ProductPage from "../../pages/ProductPage"
import { Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor"
import CartPage from "../../pages/CartPage"


//Scenario Crear un usuario
Given("Primero se ingresa a DemoBlaze", () => {
    cy.visit("/")
})
When("El usuario clickea en SignUp se crea una cuenta utilizando sus credenciales", () => {
    HomePage.clickSignUp()
    cy.wait(500)
    HomePage.typeNewUserName("UserTest4")
    HomePage.typeNewPassword(12345)
    HomePage.clickSignUpButton()
})
Then("Luego clickea en LogIn e ingresa sus datos, y se verifica su nombre de usuario", () => {
    HomePage.clickLogIn()
    cy.wait(500)
    HomePage.typeUserName("UserTest4")
    HomePage.typePassword(12345)
    HomePage.clickLogInButton()
    HomePage.validateUserName("UserTest4")
})

//Scenario Añadir una laptop al carrito
When("Se filtra Laptops, se selecciona {string}, y se añade al carrito", () => {
    HomePage.clickLaptopOption()
    HomePage.getProductBox("MacBook air")
    ProductPage.getProductName("MacBook air")
    ProductPage.getAddToCartButton()
})
Then("Se ingresa al carrito y se verifica que la {string} se haya añadido", () => {
    HomePage.clickCart()
    CartPage.getProductName("MacBook air")

})

//Scenario Desloguear de la cuenta
When("Se clickea LogIn, se ingresan los datos y luego se clickea LogOut", () => {
    HomePage.clickLogIn()
    cy.wait(500)
    HomePage.typeUserName("UserTest4", {delay: 0})
    HomePage.typePassword(12345, {delay: 0})
    HomePage.clickLogInButton()
    HomePage.clickLogOut()
})
Then("Se valida que aparezca Log In", () => {
    HomePage.elements.logIn().should("be.visible")
})