/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


let uName = document.getElementById('infoname');
let uRange = document.getElementById(parseInt('inforange'));
let uAge = document.getElementById(parseInt('infoage'));
let elButtonStart = document.querySelector('#start')
let elButtonCancel = document.querySelector('#cancel')

let price = uRange * (0.21);

console.log(uRange, uAge);
console.log(price);

elButtonStart.addEventListener('click', function(){
    // console.log('clikkato');
    const infoname = uName.value;
    console.log(infoname)
});




// if (isNaN(kmrange) || (isNaN(age))) {
//     console.log('dati inseriti non validi.')
//     document.getElementById('theresult').innerHTML = 'Dati inseriti non validi.';

// } else {
//     price = kmrange * 0.21;

//     if (age < 18) {

//         price = price - (price * 20 / 100);
//         console.log(price);
//         document.getElementById('theresult').innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) + '€';

//     } else if (age >= 65) {

//         price = price - (price * 40 / 100);
//         console.log(price);
//         document.getElementById('theresult').innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) + '€';
//     }
//     document.getElementById('theresult').innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) + '€';

// }







