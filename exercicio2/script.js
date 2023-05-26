// Exercício 2 - Vamos recriar o exercício Nacionalidade da aula de Condicionais I, dessa vez utilizando o switch case. No arquivo script.js existe uma versão do código já escrita com if else if para servir de comparação. 

// -> Relembrando o enunciado: Crie uma função que receba do usuário sua nacionalidade, utilizando um prompt que diga: "Escreva aqui sua nacionalidade". Guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// brasileira; argentina; uruguaia; chilena; colombiana.


// let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

let nacionalidade = "Chileno".toLocaleLowerCase()

if(nacionalidade === "brasileira" || nacionalidade === "brasileiro"){
    console.log("a pessoa é do Brasil!")
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!")
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!")
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!")
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!")
} else{
    console.log("nacionalidade não encontrada")
}

// Após a esttutura if else if já escrita pelos instrutores do curso, crie agora uma estrutura com o switch case que verifique se a nacionalidade recebida é igual a alguma das nacionalidades acima. Caso seja, imprima a nacionalidade no console. O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum das opções acima.

switch(nacionalidade){

    case "brasileira","brasileiro":
        console.log("a pessoa é do Brasil!");
        break

    case "argentina":
    case "argentino":    
        console.log("a pessoa é do Argentina!");
        break

    case "uruguaia","uruguaio":
        console.log("a pessoa é do Uruguai!");
        break

    case "chilena","chileno":
        console.log("a pessoa é do Chile!");
        break

    case "colombiana","colombiano":
        console.log("a pessoa é do Colômbia!");
        break

    default: 
        console.log("nacionalidade não encontrada");    
}

console.log("Nacionalidade inserida:",nacionalidade);


// Um ponto bastante importante sobre a estrutura de condicional Switch-case que descobrimos fazendo esse exerício. Como podemos ver no código acima, esse exercício demanda que preferivelmente também haja a opção de nacionalidade com a letra O no final, pois o usuário muitas vezes não sabe que o correto de nacionalidade é "brasileira", entretanto o mundo ideal pra que um cadastro funcione na vida real, deve reconhecer também quando o usuário digita "brasileiro". Primeiramente vimos que essa opção é possível de programarmos nas estruturas if else if, e a forma de fazer é utilizando o operador lógico OU ||, como podemos ver logo no início do código. Dito isso, o legal é que descobrimos uma forma de fazermos o mesmo na estrutura Switch-case, e há duas formas de escrever: a 1ª forma é separando as strings por vírgula, e a 2ª forma é digitando um segundo Case, sem se esquecer de colocar os DOIS PONTOS ao final de casa expressão Case.