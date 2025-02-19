// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
//
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica:
// usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age");
const btnEl = document.querySelector("button");
console.log(kmEl, ageEl, btnEl);

const pricePerKm = 0.21;
const discountMinor = 0.21 - (pricePerKm * 20) / 100;
const discountSenior = 0.21 - (pricePerKm * 40) / 100;

btnEl.addEventListener("click", function () {
  const km = parseInt(kmEl.value);
  const age = ageEl.value;
  if (ageEl.value === "adult") {
    const priceAdult = (km * pricePerKm).toFixed(2);
    console.log(priceAdult);
  } else if (ageEl.value === "minor") {
    const priceMinor = (km * discountMinor).toFixed(2);
    console.log(priceMinor);
  } else if (ageEl.value === "senior") {
    const priceSenior = (km * discountSenior).toFixed(2);
    console.log(priceSenior);
  }
});
