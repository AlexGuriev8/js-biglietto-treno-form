  var genera=document.getElementById('genera');
  genera.addEventListener("click", function(){
  var utente = document.getElementById('utente');
  utente.classList.remove('hidden');
  utente.classList.add('show');

  var valoreNome = document.getElementById('nome__cognome').value;
  document.getElementById('nome__cognomeIns').innerHTML = valoreNome;

  var valoreCarozza = getRndInteger(1,10)
  document.getElementById('valCarozza').innerHTML = valoreCarozza;

  var codiceTreno = getRndInteger(9000,10000)
  document.getElementById('codTreno').innerHTML = codiceTreno;

  var kilometri = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;
  var prezzoKm = 0.21;
  var prezzo = kilometri * prezzoKm;
  var messaggio = 'Tariffa Standard';
  if(eta==1){
    prezzo -= prezzo*0.2;
    messaggio =  'Minorenne';
  } else if (eta==3) {
    prezzo -=  prezzo*0.4;
    messaggio= 'Tariffa Silver';
  }
  document.getElementById('minor').innerHTML = messaggio;
  document.getElementById('price').innerHTML = prezzo.toPrecision(3) +' '+ '€';
});

var anulla = document.getElementById('anulla')
anulla.addEventListener("click", function(){
  var utente = document.getElementById('utente');
    utente.classList.add('hidden');
    utente.classList.remove('show');
    document.getElementById('nome__cognome').value='';
    document.getElementById('km').value='';
    document.getElementById('eta').value=1;
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
