// Exercício 1 - Crie um código que receba um número por prompt e verifique se esse número é divisível por 2 ou por 3. Faça isso utilizando:

// a) ifs aninhados

let divisivelPor2ou3 = 3

if (divisivelPor2ou3 % 2 === 0){

    console.log(`O número ${divisivelPor2ou3} é divisível por 2.`);

 if (divisivelPor2ou3 % 3 === 0){

    console.log(`O número ${divisivelPor2ou3} é divisível por 3.`);
    console.log(`Ou seja: O número ${divisivelPor2ou3} é divisível por 2 e 3.`);

} else {

    console.log(`O número ${divisivelPor2ou3} NÃO é divisível por 3.`);
} 

} else {

    console.log(`O número ${divisivelPor2ou3} NÃO é divisível por 2.`);

    if (divisivelPor2ou3 % 3 === 0){

        console.log(`O número ${divisivelPor2ou3} é divisível por 3.`);
    
    } else {
        console.log(`O número ${divisivelPor2ou3} NÃO é divisível por 3.`);
    }
} 

// Um ponto interessante sobre essa parte A do exercício 1. Na aula de ontem não fizemos esse último if que apesar de repetir a mesma coisa do segundo if, tanto a lógica quanto a frase, devido a rigidez na leitura que o programa faz dessas condicionais, quando por exemplo colocávamos o número 3, aparecia no Console apenas um resultado, que dizia apenas que "O número 3 NÃO é divisível por 2", quando preferivelmente no Console também deveria aparecer que "O número 3 é divisível por 3.", e este último if corrige esse problema. Se digitássemos o número 2, viriam os dois resultados no Console, mas antes de colocarmos esse último if, ao digitar o 3 vinha apenas uma mensagem, que era a do segundo e último else. Pra concluir, devido o aninhamento, quando digitamos o 3 na variável, dá false no primeiro if, e apesar do segundo console.log estar aderente, ele não roda, e então o programa nos joga direto no segundo else, e agora depois da correção, ele considera também esse último if, o que deixa o exercício mais completo. Depois de escrever tudo isso, ainda havia uma última forma de melhorar ou então complementar esse código. Já que colocamos o último if parar poder imprimir no Console quando o número é divisível por 3, também deveríamos colocar o else dizendo que NÃO é divisível por 3, pois caso colocássemos o número 7 na variável, viria apenas a impressão da linha 23 dizendo que o número 7 NÃO é divisível por 2, e agora com esse último else, que também é uma repetição do primeiro else da linha 18 mas que não é lido por estar aninhado, agora deixa a impressão do Console completa imprimindo também que o número 7 NÃO é divisível por 3. Há ainda um comentário final, pois é importante observar que esse último if e else que acrescentamos, eles estão dentro do segundo else que é na verdade o SENÃO de todo o aninhamento superior a ele, portanto eu acredito que seja por esse motivo que mesmo que haja uma repetição do é divisível por 3 no último if e NÃO é divsisível por 3 no último else, a impressão no console apenas considera o true que já deu nas condições lá no aninhamento, e obviamente ignora o que está no else da linha 21, que por sua vez engloba essa última estrutura que enfim complementa o exercício.     

// Abaixo ainda digitei um código compartilhado com um dos colegas da turma o qual está bem mais enxuto e tão completo quanto o código acima. É mais uma forma de resolver o problema da letra A do exercício 1, bem como da Parte 1 do exercício de fixação da aula de Condicionais II. 

let numero = 3

if(numero % 2 === 0){
    if(numero % 3 === 0){
        console.log(`O numero ${numero} é divisível por 2 e por 3`)
    } else{
        console.log(`O numero ${numero} é divisível por 2 e não por 3`)
    }
}else{
    console.log(`O numero ${numero} não é divisível por 2`)
    if(numero % 3 === 0){
        console.log(`O numero ${numero} é divisível por 3`)
    } else{
        console.log(`O numero ${numero} não é divisível por 3`)
    }
}


// b) Utilizando um operador lógico para unir duas operações relacionais

if (divisivelPor2ou3 % 2 === 0 && divisivelPor2ou3 % 3 === 0){

    console.log(`O número ${divisivelPor2ou3} é divisível por 2 e 3.`);

} else {

    console.log(`O número ${divisivelPor2ou3} NÃO é divisível por 2 e 3.`);
} 


if (divisivelPor2ou3 % 2 === 0 || divisivelPor2ou3 % 3 === 0){

    console.log(`O número ${divisivelPor2ou3} é divisível por 2 ou 3.`);

} else {

    console.log(`O número ${divisivelPor2ou3} NÃO é divisível por 2 ou 3.`);

}
