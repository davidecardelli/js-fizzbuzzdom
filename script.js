// Prendo elemento dal DOM
const list = document.getElementById('list');

// Creo un ciclo che si ripeta 100 volte

let result = '';
let elementList = '';

for (let i = 1; i <= 100; i++) {

    let content = i; 

    // Se è divisibile per 3 e per 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
        content = "fizzbuzz";

    // Se è divisibile per 3
    } else if  (i % 3 === 0) {
        content = "fizz";
       
    // Se è divisibile per 5
    } else if (i % 5 === 0) {
        content = "buzz";
    } 

    elementList += `<li class=${content}> ${content} </li>`;

}

list.innerHTML = elementList;


