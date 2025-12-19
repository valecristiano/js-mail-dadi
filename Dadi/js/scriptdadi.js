//  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//  Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generare numero random 1-6 per giocatore
const playerNumber = Math.floor(Math.random() * 6 + 1);
console.log("playerNumber", playerNumber);

// generare numero random 1-6 per computer
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log("computerNumber", computerNumber);

// confrontare i due numeri generati
let theWinner;

if (computerNumber > playerNumber) {
  theWinner = "Ha vinto il computer";
} else if (computerNumber === playerNumber) {
  theWinner = "Risultato Pari";
} else {
  theWinner = "Ha vinto il player";
}

// far vincere il numero maggiore
console.log(theWinner);
const winnerIs = alert(theWinner);
