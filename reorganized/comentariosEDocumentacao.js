//isso é um comentario

/*
Essa função retorna a soma de dois elementos
esses elementos sao inteiros
retorna um inteiro
*/
function Soma(a, b) {
    return a + b
}

/**
 * 
 * @param {Number} raio 
 * @returns {Number}
 */
function AreaCirculo(raio) {
    console.log(Math.PI * (raio ** 2))
}

/**
 * envia um email
 * @param {String} from define o remetente
 * @param {String} to define o destinatário
 * @returns retorna ele concatenado
 */
function SendEmail(from, to) {
    //fluxo de envio de email
    return 'Mensagem enviada de ' + from + ' para ' + to
}

//console.log(SendEmail('Daniel', 'Joao'))
AreaCirculo(3)

function Soma(a, b, c) {
    let soma = a + b + c
    return soma
}

console.log(Soma(10010, 3959, 1821))