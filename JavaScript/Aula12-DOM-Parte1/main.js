let paragrafo = document.getElementById('paragrafo');
paragrafo.style.color = 'pink';
paragrafo.style.backgroundColor = 'black';
paragrafo.style.textAlign = 'center';
paragrafo.style.margin = '20px';

let buscaClasse = document.getElementsByClassName('item');
console.log(buscaClasse)

for(let c = 4; c <= buscaClasse.length; c++){
    // buscaClasse[c].style.backgroundColor = 'blue';
}

console.log(buscaClasse.length)

let acessaParagrafos = document.getElementsByTagName('p')
console.log(acessaParagrafos)

for(let i = 3; i <= acessaParagrafos.length; i++){
    // acessaParagrafos[i].style.color = 'orange';
}

let acessaName = document.getElementsByName('name_item')
console.log(acessaName)

for(let z = 0; z <= acessaName.length; z++){
    if(z % 2 == 0){
        acessaName[z].style.color = 'pink'
    }
}

let item2 = document.getElementById('item2');
item2.remove();

let lista = document.getElementById('lista');
let item5 = document.getElementById('item5');

lista.insertBefore(item2, item5.nextSibling)

let retiraEstilo = document.getElementById('messi');
retiraEstilo.style.listStyle = 'none';