// Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function contatoreAutomatico(intervallo) {
    let contatore = 0;
    return () => {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, intervallo);
    };
}


// commentato altrimenti va a infinito


// const startOgniSecondo = contatoreAutomatico(1000);
// const startOgniDueSecondi = contatoreAutomatico(2000);
// startOgniSecondo();
// startOgniDueSecondi()

