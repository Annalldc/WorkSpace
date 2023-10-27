 //Array unidimensional
var numeros = [54, 111, 58, 853, 17, 75, 30]
console.log(numeros)

console.clear()

//Array Bidimensional
//Cria uma array com três dimensionais
var matrix = [
    ["I-Carly", 2011, 10],
    ["Os Feiticeiros de Waverlyplace", 2009, 10],
    ["Doug", 1999, 8.7]
]
console.log(matrix)

console.clear()

//console.log(nemeros)
console.log("Antes: " + numeros)
numeros[3] = 'hora do lanche'
console.log("Depois: " + numeros)

//to string
var numArray = [2, 3, 6, 7, 45, 86]
console.log(numArray)
let receba = numArray.toString()
console.log(receba)

//método join
let testJoin = numArray.join(" . ")
console.log("testeJoin")

//Retornar o tamanho do Array
var numArray = [2, 3, 6, 7, 45, 86]
console.log(numArray)

//Método para retirar o último elemento
let retiraUltimoElemento = numArray.pop()
console.log(retiraUltimoElemento)
console.log(numArray)

//Método ADD nova informação no final do Array
let novaInformacao = numArray.push("Kiwi")
console.log(numArray)
console.log(novaInformacao)  

// Método para retirar primeiro elemento
let retirarPrimeiroElemento = numArray.shift()
console.log(numArray)
console.log(retirarPrimeiroElemento)

// Método para add no início
let inseririnicio = numArray.unshift("pipoca")
console.log(numArray)
console.log(inseririnicio)
