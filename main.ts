let contraseña = 0
let letra = 0
let simbolo = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        basic.showString("pass=")
        contraseña = randint(1, 3)
        if (contraseña == 1) {
            basic.showNumber(0)
        } else if (contraseña == 2) {
            letra = randint(1, 4)
            if (letra == 1) {
                basic.showString("a")
            } else if (letra == 2) {
                basic.showString("b")
            } else if (letra == 3) {
                basic.showString("c")
            } else if (letra == 4) {
                basic.showString("d")
            }
        } else if (contraseña == 3) {
            simbolo = randint(1, 4)
            if (simbolo == 1) {
                basic.showString(".")
            } else if (simbolo == 2) {
                basic.showString("?")
            } else if (simbolo == 3) {
                basic.showString("&")
            } else if (simbolo == 4) {
                basic.showString("$")
            }
        }
    }
})
