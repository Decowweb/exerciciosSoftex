function calculator() {
    let firstNumber = parseFloat(prompt('DIGITE O PRIMEIRO NÚMERO:'))
    let secondNumber = parseFloat(prompt('DIGITE O SEGUNDO NÚMERO:'))
    let operator = prompt('DIGITE O OPERADOR:')

    try {
        if ((secondNumber == '0' && operator == '/')) {
            throw "Não pode dividir por 0."
        } else if (isNaN(firstNumber) || isNaN(secondNumber) || (firstNumber == '' || secondNumber == '')) {
            throw "Não é um número"
        }
    } catch (err) {
        return alert(`Erro: ${err}`)
    }

    switch (operator) {
        case '+':
            return alert(firstNumber + secondNumber)
            break
        case '*':
            return alert(firstNumber * secondNumber)
            break
        case '/':
            return alert(firstNumber / secondNumber)
        case '-':
            return alert(firstNumber - secondNumber)
            break
        default:
            return alert(`OPERADOR INEXISTENTE.`)
    }
}

calculator()