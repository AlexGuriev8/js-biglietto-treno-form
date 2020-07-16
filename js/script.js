document.getElementById('genera').addEventListener("click", function(){
  var utente = document.getElementById('utente');
  utente.classList.remove('hidden');
  utente.classList.add('show');

  var valoreNome = document.getElementById('nome__cognome').value;
  document.getElementById('nome__cognomeIns').innerHTML = valoreNome;

  var valoreCarozza = Math.floor((Math.random() * 10) + 1);
  document.getElementById('valCarozza').innerHTML = valoreCarozza;

  var codiceTreno = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
  document.getElementById('codTreno').innerHTML = codiceTreno;

  var kilometri = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;
  var prezzoKm = 0.21;
  var prezzo = kilometri * prezzoKm;
  if(eta==1){
    prezzo = prezzo - (prezzo*0.2);
    document.getElementById('minor').innerHTML =  'Minorenne';
  } else if (eta==2) {
    prezzo = kilometri * prezzoKm;
    document.getElementById('minor').innerHTML =  'Maggiorenne';
  } else{
      prezzo = prezzo - (prezzo*0.4);
    document.getElementById('minor').innerHTML =  'Over 65';
  }
  var a = Math.round(prezzo * 1000) / 1000;
  document.getElementById('price').innerHTML =  a + ' '+ '€';
});

document.getElementById('anulla').addEventListener("click", function(){
  var utente = document.getElementById('utente');
    utente.classList.add('hidden');
    utente.classList.remove('show');
});
