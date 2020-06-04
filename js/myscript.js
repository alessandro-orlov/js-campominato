/*
il computer deve generare 16 numeri casuali da 1 a 100
in seguito chiedere al utente di inserire un numero alla volta da 1 a 100
Se il numero inserito è presente nella lista dei numeri generati la partita termina, altrimenti si continua chiedendo un altro numero.
La partita termina quando l'utente inserisce un numero "Vietato" OPPURE raggiunge numero massimo consentito.
Infine il programma ci comunica il punteggio ovvero il numero delle volte che l'utente ha digitato il numero consentito.
*/

// OPZIONI GIOCO
// Il valore == alla quantita di numeri generati (che equivalgono a "mine")
var mineSulCampo = 16;

// Selezioniamo la difficoltà di gioco
var selezioneDifficolta = parseInt(prompt('scegli la difficoltà: 1 per Facile, 2 per Normale, 3 per Difficile'));
// Validazione selezioneDifficolta
while ( selezioneDifficolta != 1 && selezioneDifficolta != 2 && selezioneDifficolta != 3 ) {
  selezioneDifficolta = parseInt(prompt('Errore! Digita 1 o 2 o 3'));
}
var difficoltaGioco;
  if (selezioneDifficolta == 1) {
      difficoltaGioco = 100; // Facile
    } else if (selezioneDifficolta == 2) {
      difficoltaGioco = 80; // Normale
    } else if (selezioneDifficolta == 3) {
      difficoltaGioco = 50; // Difficile
  }
  console.log('la difficoltà di gioco è ' + difficoltaGioco);


// Lets the game begin
var i = 0
var numeroPresente = false;
var punteggio = 1;

// Generiamo i 16 numeri ( Campo minato ) utlizzando la funzuione
var numeroMine = campoMinato(mineSulCampo, difficoltaGioco);
console.log(numeroMine);

// Verifichiamo se il numero utente è presente nell'array per un'numero di volte
while ( (numeroPresente == false) && (i < (difficoltaGioco - mineSulCampo)) ) {
  // Chidiamo il numero all'utente
  var numeroUtente = parseInt(prompt('inserisci un numero da 1 a ' +  difficoltaGioco));

  // Validazione numero utente
  while((numeroUtente == 0 || numeroUtente > difficoltaGioco) || isNaN(numeroUtente)) {
  numeroUtente = parseInt(prompt('Errore! Inserisci un numero da 1 a ' +  difficoltaGioco));

  }
  console.log('Numero digitato dall\'utente ' + numeroUtente);

  // Verifica se il numero emmesso dall'utente è presente tra i numeri generati (campoMinato)
  if(numeroMine.includes(numeroUtente)) {
    numeroPresente = true
    }

  // Calcolo punteggio
  punteggioFinale = punteggio + i;
  console.log('Il tuo punteggio corrente è: ' + punteggioFinale);

  // Fine di iterazione
  i++
}

// Output
if (numeroPresente == true) {
  console.log('BOOM!!! Hai perso! Il tuo punteggio è ' + punteggioFinale);
  alert('BOOM!!! Hai perso! Il tuo punteggio è ' + punteggioFinale);
} else {
  console.log('Congratulazioni, hai vinto! '  + punteggioFinale);
  alert('Congratulazioni, hai vinto! '  + punteggioFinale);
}


//---------------------FUNCTIONS------------------------------------

// Funzione campoMinato:
// quantity     ==    quantita numeti generati (le mine sul campo)
// difficulty   ==    difficoltà (range dei numeri generati)
function campoMinato(quantity, difficulty) {
  // Array di numeri generati
  var listaArray = [];
  // Creo l'arrey che deve contenere non meno di numero di elementi pari al valore di "quantity"
  while(listaArray.length < quantity) {
    var numeroRandom = Math.floor(Math.random() * difficulty) + 1;
    console.log(numeroRandom);
    if(!listaArray.includes(numeroRandom)) {
      listaArray.push(numeroRandom);
    }
  }
  // Output
  return listaArray;
}
