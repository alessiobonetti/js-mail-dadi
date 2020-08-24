// genero numero random

var numeroUtente = Math.floor(Math.random() * 6 )+1;

var numeroPc = Math.floor(Math.random() * 6 )+1;

// Controllo

if (numeroUtente > numeroPc ) {
  document.getElementById("vincitore").innerHTML = "Vince l'utente!!";
}
else if (numeroUtente < numeroPc ) {
  document.getElementById("vincitore").innerHTML = "Vince il PC!!";
}
else {
  document.getElementById("vincitore").innerHTML = "Pareggio!!";
}
// Stampo i numeri dei dadi
document.getElementById("dado_utente").innerHTML = numeroUtente;
document.getElementById("dado_pc").innerHTML = numeroPc;
