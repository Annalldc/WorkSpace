function somaNumeros (num1 = 1, num2 = 1){
    return num1 + num2
}

let x = somaNumeros(4,5); //Chamada da função AddNums
console.log(x);

let z = myFunc(4,5); // Chamda da função MyFunc
console.log(z);

function myFunc(num1,num2){
    return num1 * num2;
}

let soma = somaNumeros(10,15,3)
console.log("Essa é a variável soma:" + soma)

console.clear()

const hello = () => {
    return 'Olá Arrow Function!';
}