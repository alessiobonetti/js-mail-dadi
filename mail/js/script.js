// Array con mail registrate
var mailRegistrate = [ "utente1@mail.com" , "utente2@mail.com" , "utente3@mail.com" , "utente4@mail.com" , "utente5@mail.com" ,];

// Inserimento mail
var mailUtente = prompt("Inserisci la tua mail");

// Controllo

for (var i = 0; i < mailRegistrate.length; i++) {
  if (mailUtente === mailRegistrate[i]) {
    alert("Benvenuto Utente");
    break;
  }
  else  {
    alert("Non sei un utente registrato o hai sbagliato ad inserire la mail.");
    break;
  }

}
