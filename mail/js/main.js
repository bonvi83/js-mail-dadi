// chiedo indirizzo email all'utente
let emailUtente = prompt("Scrivi il tuo indirizzo e-mail");
console.log(emailUtente)


// lista di email che libero accesso
const lista = ["tiziano.gattaro@boolean.com", "gigi.nazionale@boolean.com", "mattia.pizzettato@boolean.com", "classe117@boolean.com"];


// stampo la risposta
let risposta = document.getElementById("risposta");


for (let i=0, i < lista.length; i++) {
    console.log(lista[i
    if (lista[i] == emailUtente) {
        risposta.innerHTML = "Accesso CONSENTITO";
    }
    else {
        risposta.innerHTML = "Accesso NEGATO";
    }
}