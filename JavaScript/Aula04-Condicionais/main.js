let professoraBateEmAluno = true
let professoraXingaAluno = true

if(professoraBateEmAluno == true && professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!")
}

if(professoraBateEmAluno == true || professoraXingaAluno == true){
    console.log("Professora promovida com sucesso")
}

console.clear()

let numero1 = 10
let numero2 = 4

if(numero1 > numero2){
    console.log("Essa informação é falsa")
}

console.clear()
//validar boatos
let teraComidaNaTotvs = true

if(!teraComidaNaTotvs == false){
    console.log("Não vou nem almoçar, Alexsandro o brabo")
}else{// se não
    console.log("Você terá que almocar seu pobre!!")
}

console.clear()

let numero = 11
if(numero % 2 == 0){
    console.log("o numero " + numero + " é par ")
}else{
    console.log('o número ${numero} é impar')
}
console.clear()

let morangoMaduro = null
if(morangoMaduro == true){
    console.log("Pode comer")
}else if(morangoMaduro == false){
    console.log("Não come")
}else{
    console.log("Seu morango está estragado")
}