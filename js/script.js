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
let uRange = document.getElementById(('inforange'));
let uAge = document.getElementById(('infoage'));
let elButtonStart = document.querySelector('#start')
let elButtonCancel = document.querySelector('#cancel')


let price = uRange * (0.21);


// console.log(uRange, uAge);
// console.log(price);

elButtonStart.addEventListener('click', function () {
    // console.log('clikkato');
    const infoname = uName.value;
    const inforange = parseFloat(uRange.value);
    const infoage = uAge.value;

    console.log(infoname, inforange)
    document.getElementById("ticket").classList.remove("d-none");


    // variabili per sconti
    let price = (inforange * 0.21).toFixed(2);
    let juniorPrice = price - (price * 20 / 100).toFixed(2);
    let seniorPrice = price - (price * 40 / 100).toFixed(2);

    if (isNaN(inforange)) {
        console.log('Inserisci un numero valido.');
        return;


    } else if (infoage === 'Junior') {
        price = juniorPrice.toFixed(2);
        console.log(juniorPrice);

    } else if (infoage === 'Senior') {
        price = seniorPrice.toFixed(2);
        console.log(seniorPrice);
    }
    else {
        console.log(price);
    }
    let wagoNumber = getRndInteger(1, 9);
    console.log(wagoNumber);
    let codeNumber = getRndInteger(1, 99999);
    console.log(codeNumber);



    document.getElementById('printname').innerHTML = infoname;
    document.getElementById('offer').innerHTML = infoage;
    document.getElementById('wagon').innerHTML = wagoNumber;
    document.getElementById('codcp').innerHTML = codeNumber;
    document.getElementById('priceticket').innerHTML = price +'€';

});

elButtonCancel.addEventListener('click', function () {
    uName.value = '';
    uRange.value = '';
    uAge.value = '';


    document.getElementById("ticket").classList.add("d-none");
    document.getElementById('printname').innerHTML = '';
    document.getElementById('offer').innerHTML = '';
    document.getElementById('wagon').innerHTML ='';
    document.getElementById('codcp').innerHTML = '';
    document.getElementById('priceticket').innerHTML = '';

    
});













