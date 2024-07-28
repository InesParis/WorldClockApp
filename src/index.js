//Los Angeles
setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss"
  )}<small>${losAngelesTime.format("A")}</small>`;
}, 1000);

//Lisbon
setInterval(function () {
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = `${lisbonTime.format(
    "h:mm:ss"
  )}<small>${lisbonTime.format("A")}</small>`;
}, 1000);

//Berlin
setInterval(function () {
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = `${berlinTime.format(
    "h:mm:ss"
  )}<small>${berlinTime.format("A")}</small>`;
}, 1000);
