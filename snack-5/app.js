// Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

//     Nota: Questa funzione creerà un loop infinito.Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
    const intervallo = setInterval(function () {
        console.log(messaggio);
    }, 1000);


    setTimeout(function () {
        clearInterval(intervallo);
        console.log("fine conteggio");
    }, 5000);
}

stampaOgniSecondo("ciao");
