/*
il computer deve generare 16 numeri casuali da 1 a 100
in seguito chiedere al utente di inserire un numero alla volta da 1 a 100
Se il numero inserito è presente nella lista dei numeri generati la partita termina, altrimenti si continua chiedendo un altro numero.
La partita termina quando l'utente inserisce un numero "Vietato" OPPURE raggiunge numero massimo consentito.
Infine il programma ci comunica il punteggio ovvero il numero delle volte che l'utente ha digitato il numero consentito.
*/

// Selezioniamo la difficoltà di gioco
var selezioneDifficolta = parseInt(prompt('scegli la dificoltà: 1 per Facile, 2 per Normale, 3 per Difficile'));
while ( selezioneDifficolta != 1 && selezioneDifficolta != 2 && selezioneDifficolta != 3 ) {
  selezioneDifficolta = parseInt(prompt('Errore! Digita 1 o 2 o 3'));
}
var dificoltaGioco;
  if (selezioneDifficolta == 1) {
      dificoltaGioco = 150;
    } else if (selezioneDifficolta == 2) {
      dificoltaGioco = 150;
    } else if (selezioneDifficolta == 3) {
      dificoltaGioco = 50;
  }
console.log('la dificoltà di gioco è ' + dificoltaGioco);


// Lets the game begin
var i = 0
var numeroPresente = false;
var punteggio = 1;

//verifichiamo se il numero utente è presente nell'array per 5 volte
while ( (numeroPresente == false) && (i < (dificoltaGioco - 16)) ) {

  //numero di 16 cifre
  var numeroMine = campoMinato(16, dificoltaGioco);
  console.log(numeroMine);

  //chidiamo il numero all'utente
  var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 100'));
  // Validazione numero utente
  while((numeroUtente <= 100 && numeroUtente == 0 || numeroUtente > 100) || isNaN(numeroUtente)) {
  numeroUtente = parseInt(prompt('Errore! Inserisci un numero da 1 a 100'));
  }
  console.log('Numero digitato dall\'utente ' + numeroUtente);

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
  console.log('Congratulazioni, hai vinto! Il numero è assente '  + punteggioFinale);
  alert('Congratulazioni, hai vinto! Il numero è assente '  + punteggioFinale);
}


//---------------------FUNCTIONS------------------------------------

// Funzione campoMinato:
// quantity     ==    quantita numeti generati
// difficulty   ==    dificoltà (range dei numeri generati)
function campoMinato(quantity, difficulty) {
  //lista numeri
  var listaArray = [];
  //creo l'arrey
  for (var i = 1; i <= quantity; i++) {
    var numeroRandom = Math.floor(Math.random() * difficulty) + 1;
    listaArray.push(numeroRandom);
  }
  // Output
  return listaArray;
}
