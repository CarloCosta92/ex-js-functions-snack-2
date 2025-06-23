// Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore(callback).La funzione deve eseguire l'operazione fornita sui due numeri.

const eseguiOperazione = (num1, num2, operatore) => operatore(num1, num2);

const somma = (num1, num2) => (num1 + num2);
const differenza = (num1, num2) => (num1 - num2);
const moltiplicazione = (num1, num2) => (num1 * num2);
const divisione = (num1, num2) => (num1 / num2);

console.log(eseguiOperazione(4, 5, somma))
console.log(eseguiOperazione(4, 5, differenza))
console.log(eseguiOperazione(4, 5, moltiplicazione))
console.log(eseguiOperazione(4, 5, divisione))