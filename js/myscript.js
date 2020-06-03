/*
il computer deve generare 16 numeri casuali da 1 a 100
in seguito chiedere al utente di inserire un numero alla volta da 1 a 100
Se il numero inserito è presente nella lista dei numeri generati la partita termina, altrimenti si continua chiedendo un altro numero.
La partita termina quando l'utente inserisce un numero "Vietato" OPPURE raggiunge numero massimo consentito.
Infine il programma ci comunica il punteggio ovvero il numero delle volte che l'utente ha digitato il numero consentito.
*/

// Selezioniamo la difficoltà di gioco
var selezioneDifficolta = parseInt(prompt('scegli la dificoltà: 1 per Facile, 2 per Normale, 3 per Difficile'));
while (selezioneDifficolta != 1 && selezioneDifficolta != 2 && selezioneDifficolta != 3) {
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

//Chiediamo un numero all'utente
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
while((numeroUtente <= 100 && numeroUtente == 0 || numeroUtente > 100) || isNaN(numeroUtente)) {
  numeroUtente = parseInt(prompt('Errore! Inserisci un numero da 1 a 100'));
}
console.log('Numero digitato dall\'utente ' + numeroUtente);


//Campo minato di 16 mine
var campoMinato = campoMinato(16, dificoltaGioco);
console.log(campoMinato);


//Lets the game begin
var gameOver = 'gioco finito'
var i = 0;
while (i<10) {
  if( !(numeroUtente === campoMinato[i]) ) {
    numeroUtente = parseInt(prompt('Fai il next step: digita un numero da 1 a 100'));
  } else {
    alert(gameOver);
  }
  i++
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
