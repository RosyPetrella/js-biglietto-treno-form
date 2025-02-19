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
//
// MILESTONE 2:
// Realizzere un form in pagina in cui l’utente potrà inserire i dati
// e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina

const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age");
const btnCalcEl = document.getElementById("calculator");
const btnSendEl = document.getElementById("send");
const nameEl = document.getElementById("userName");

const formEl = document.querySelector("form");
const passengerNameEl = document.querySelector(".passengerName");
const typeOfTicketEl = document.querySelector(".typeOfTicket");
const ticketPriceEl = document.querySelector(".ticketPrice");

const pricePerKm = 0.21;
const discountMinor = 0.21 - (pricePerKm * 20) / 100;
const discountSenior = 0.21 - (pricePerKm * 40) / 100;

btnCalcEl.addEventListener("click", function () {
  const km = parseInt(kmEl.value);
  const age = ageEl.value;
  if (ageEl.value === "adult") {
    const priceAdult = (km * pricePerKm).toFixed(2);
    alert("Il costo del biglietto è di € " + priceAdult);
    return priceAdult;
  } else if (ageEl.value === "minor") {
    const priceMinor = (km * discountMinor).toFixed(2);
    alert("Il costo del biglietto è di € " + priceMinor);
    return priceMinor;
  } else if (ageEl.value === "senior") {
    const priceSenior = (km * discountSenior).toFixed(2);
    alert("Il costo del biglietto è di € " + priceSenior);
    return priceSenior;
  }
});

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  passengerNameEl.innerHTML = nameEl.value;
  typeOfTicketEl.innerHTML = ageEl.value;
});
