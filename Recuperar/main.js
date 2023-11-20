let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let mySpan = document.getElementById("mySpan");

let verificarMes = () => {
    switch (myInput.value) {
        case "1":
            mySpan.innerHTML = "Mês 1 e a estação desse mês é Verão ";
            console.log("Mês 1 e a estação desse mês é Verão");
            break;
        
        case "01":
            mySpan.innerHTML = "Mês 01 e a estação desse mês é Verão";
            console.log("Mês 01 e a estação desse mês é Verão");
            break;
        
        case "2":
            mySpan.innerHTML = "Mês 2 e a estação desse mês é Verão";
            console.log("Mês 2 e a estação desse mês é Verão");
            break

        case "02":
            mySpan.innerHTML = "Mês 02 e a estação desse mês é Verão";
            console.log("Mês 01 e a estação desse mês é Verão");
            break;

        case "3":
            mySpan.innerHTML = "Mês 3 e a estação desse mês é Verão";
            console.log("Mês 3 e a estação desse mês é Verão");
            break;

        case "03":
            mySpan.innerHTML = "Mês 03 e a estação desse mês é Verão";
            console.log("Mês 03 e a estação desse mês é Verão");

            case "4":
            mySpan.innerHTML = "Mês 4 e a estação desse mês é Outono ";
            console.log("Mês 4 e a estação desse mês é Outono ");
            break;

        case "04":
            mySpan.innerHTML = "Mês 04 e a estação desse mês é Outono";
            console.log("Mês 04 e a estação desse mês é Outono ");
            break;

        case "5":
            mySpan.innerHTML = "Mês 5 e a estação desse mês é Outono ";
            console.log("Mês 5 e a estação desse mês é Outono ");
            break;

        case "05":
            mySpan.innerHTML = "Mês 05 e a estação desse mês é Outono ";
            console.log("Mês 05 e a estação desse mês é Outono ");
            break;

        case "6":
            mySpan.innerHTML = "Mês 6 e a estação desse mês é Outono ";
            console.log("Mês 6 e a estação desse mês é Outono ");
            break;

        case "06":
            mySpan.innerHTML = "Mês 06 e a estação desse mês é Outono ";
            console.log("Mês 06 e a estação desse mês é Outono ");
            break;

        case "7":
            mySpan.innerHTML = "Mês 7 e a estação desse mês é Inverno ";
            console.log("Mês 7 e a estação desse mês é Inverno ");
            break;

        case "07":
            mySpan.innerHTML = "Mês 07 e a estação desse mês é Inverno ";
            console.log("Mês 07 e a estação desse mês é Inverno ");
            break;

        case "8":
            mySpan.innerHTML = "Mês 8 e a estação desse mês é Inverno ";
            console.log("Mês 8 e a estação desse mês é Inverno ");
            break;

        case "08":
            mySpan.innerHTML = "Mês 08 e a estação desse mês é Inverno ";
            console.log("Mês 08 e a estação desse mês é Inverno ");
            break;

        case "9":
            mySpan.innerHTML = "Mês 9 e a estação desse mês é Inverno ";
            console.log("Mês 9 e a estação desse mês é Inverno ");
            break;

        case "09":
            mySpan.innerHTML = "Mês 09 e a estação desse mês é Inverno ";
            console.log("Mês 09 e a estação desse mês é Inverno ");
            break;

        case "10":
            mySpan.innerHTML = "Mês 10 e a estação desse mês é Primavera🌷";
            console.log("Mês 10 e a estação desse mês é Primavera 🌷");
            break;

        case "11":
            mySpan.innerHTML = "Mês 11 e a estação desse mês é Primavera 🌷";
            console.log("Mês 11 e a estação desse mês é Primavera 🌷");
            break;

        case "12":
            mySpan.innerHTML = "Mês 12 e a estação desse mês é Primavera 🌷";
            console.log("Mês 12 e a estação desse mês é Primavera 🌷");
            break;

        default:
            mySpan.innerHTML = "digite uma informação válida";
            console.log("digite uma informação válida");
            break;
    }
}


myButton.addEventListener("click", verificarMes);
myInput.addEventListener("keypress", (event) => {
    if(event.key == "Enter") {
        verificarMes();
    }
});