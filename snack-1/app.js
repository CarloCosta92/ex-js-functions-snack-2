// Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
//     Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.


// Crea una funzione che somma due numeri.
function sum() {
    const num1 = 5;
    const num2 = 10;
    return console.log(num1 + num2)

}

sum()

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(num1, num2) {
    return num1 + num2;
}

console.log(somma(5, 3));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaAssegnata = function (num1, num2) {
    return num1 + num2;
};

console.log(sommaAssegnata(6, 4));

// Arrow function
const sommaArrowFunction = (num1, num2) => num1 + num2;

console.log(sommaArrowFunction(8, 6));



