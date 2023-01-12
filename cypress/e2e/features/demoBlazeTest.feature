Feature: Challenge DemoBlaze

    Ejercicio DemoBlaze que consiste en dar de alta un usuario, desloguearse. Luego elegir una laptop, añadirla al carrito y verificar que esté la misma

Background: Ingresar a DemoBlaze
    Given Primero se ingresa a DemoBlaze
Scenario: Crear usuario
    When El usuario clickea en SignUp se crea una cuenta utilizando sus credenciales
    Then Luego clickea en LogIn e ingresa sus datos, y se verifica su nombre de usuario
Scenario: Añadir una laptop al carrito
    When Se filtra Laptops, se selecciona "MacBook air", y se añade al carrito
    Then Se ingresa al carrito y se verifica que la "MacBook air" se haya añadido
Scenario: Desloguear de la cuenta
    When Se clickea LogIn, se ingresan los datos y luego se clickea LogOut
    Then Se valida que aparezca Log In