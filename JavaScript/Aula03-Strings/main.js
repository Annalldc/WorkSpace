var texto1 = "Texto aleatório dos atrasados da volta da pausa";
var texto2 = "Texto aleatório dos atrasados da volta da pausa";

console.log(texto1 + " " + "A vida é um sapinho dando pulinho na lagoa" + "" + texto2);

//Template String

console.log(`${texto1} A vida é um sapinho dando pulinho na lagoa   ${texto2}`);

var numero1 = 2;
var numero2 = 3;
console.log(`${numero1 + numero2}`)
console.log(numero1 + numero2)

//Métodos de Strings
//Strings começam na posição 0
console.clear();

const string1 = "Hoje eu vou assistir Harry Potter";

//Acessando  caractere
console.log(string1);
console.log(string1.charAt(8));

console.clear();

const string3 = "Instituto da oportunidade Social";
console.log(string3);
console.log("posição 10" + string3.charAt(11));
console.log("posição 11" + string3.charAt(5));

console.clear

const stringA = "Instituto da oportunidade Social";
console.log("Quantidade de caracteres: " + stringA.length);

