// Exercício 3 - Reescreva os códigos do arquivo script.js utilizando o if ternário.

//códigos a serem reescritos

// a)
let nome = "Paulo"

if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}

// formato if ternário
nome === "José" ?
console.log("Oi, Zé!"):
console.log("Olá, " + nome)


nome === "José" || nome === "Paulo" ?
console.log("Oi, Zé Paulo!"):
console.log(`Olá, ${nome}`)

// aqui acima eu testei o uso de OU no if ternário e funciona certinho, e ainda tiei o concatenar no último console.log e coloquei Template String.


// b)

let idade = 17

if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}

// formato if ternário
idade >=18 ?
console.log("Pode tirar carteira de motorista!"):
console.log("Ainda não pode tirar carteira de motorista!")

