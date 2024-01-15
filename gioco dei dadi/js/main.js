let risultato = document.getElementById("risultato");

let bottone = document.getElementById("bottone");


// funzione per generare numeri casuali
bottone.addEventListener("click",
    function () {
        let numeroUtente = Math.floor(Math.random () * 6 + 1);
        console.log(numeroUtente);

        let numeroPc = Math.floor(Math.random () * 6 + 1);
        console.log(numeroPc);

        if (numeroUtente > numeroPc) {
            risultato.innerHTML = `Hai VINTO, il tuo numero è ${numeroUtente}, il numero del pc è ${numeroPc}`
        } else if  (numeroUtente < numeroPc) {
            risultato.innerHTML = `Hai PERSO, il tuo numero è ${numeroUtente}, il numero del pc è ${numeroPc}`
        } else {
            risultato.innerHTML = `PAREGGIO, il tuo numero è ${numeroUtente}, il numero del pc è ${numeroPc}`
        }
    }
)