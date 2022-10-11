// DONE - chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// DONE - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// DONE - va applicato uno sconto del 20% per i minorenni
// DONE - va applicato uno sconto del 40% per gli over 65.
// TO DO - calcolare il prezzo Finaleale del viaggio con massimo due decimali, per indicare centesimi sul prezzo

const tariffaKm = 0.21;
const maggioreEta = 18;
const overEta = 65;
const scontoVenti = 20;
const scontoQuaranta = 40;
let sconto;
let prezzoFinale;

const distanza = parseInt(prompt('Inserisci distanza da percorrere'));
const etaUtente = parseInt(prompt('Inserisci l\'età dell\'utente'));

const prezzoBiglietto = tariffaKm * distanza;

if (etaUtente < maggioreEta){
    sconto = (prezzoBiglietto / 100) * scontoVenti;
    prezzoFinale = prezzoBiglietto - sconto;
}
else if (etaUtente >= overEta ){
    sconto = (prezzoBiglietto / 100) * scontoQuaranta;
    prezzoFinale = prezzoBiglietto - sconto;
}
else{
    prezzoFinale = prezzoBiglietto
}

let outputDistanza = `${distanza} km`
let outputPrezzoFinale = `${prezzoFinale} €`

document.getElementById('distanza').innerHTML += outputDistanza;
document.getElementById('etaUtente').innerHTML += etaUtente;
document.getElementById('prezzo').innerHTML += outputPrezzoFinale;