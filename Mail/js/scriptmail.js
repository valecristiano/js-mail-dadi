// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’.

// creare una lista di mail con un array

const invitedList = [
  "mario.rossi@example.com",
  "luca.bianchi@testmail.com",
  "anna.verdi@fakemail.org",
  "giulia.neri@sample.net",
  "paolo.conti@demoemail.com",
  "sara.ferrari@mockmail.io",
  "andrea.russo@tempmail.net",
  "chiara.esposito@placeholder.org",
  "francesco.gallo@dummyemail.com",
  "valentina.mancini@testbox.io",
];
console.log(invitedList);

//creare un prompt per cheidere email all'utente
const userEmail = prompt("Scrivi qui la tua email");
console.log("userEmail", userEmail);

//creare un for che controlli se l'email dell'utente è presente o meno nella lista
let approvation;

for (let i = 0; i < invitedList.length; i++) {
  currentEmail = invitedList[i];

  if (currentEmail === userEmail) {
    approvation = "Sei nella lista degli invitati";
  } else {
    approvation = "Non sei nella lista degli invitati";
  }
}

// creare un otput che stampa (o alert) un messaggio positivo o negativo in base all'esito del controllo
console.log(approvation);
const approvAlert = alert(approvation);
