let currentTime;
document
  .querySelector("#countries")
  .addEventListener("change", displayCurrentTime);
document
  .querySelector("#countries")
  .addEventListener("change", displayCurrentTimeZone);

function displayCurrentTime(event) {
  let selectedOption = event.target.value;
  let currentTime;
  if (selectedOption === "tokyo") {
    currentTime = moment().tz("Asia/Tokyo").format("MMMM D, YYYY HH:MM A");
  } else if (selectedOption === "paris") {
    currentTime = moment().tz("Europe/ Paris").format("MMMM D, YYYY HH:MM A");
  } else if (selectedOption === "sydney") {
    currentTime = moment()
      .tz("Australia/ Sydney")
      .format("MMMM D, YYYY HH:MM A");
  }
}

function displayCurrentTimeZone(event) {
  let selectedOption = event.target.value;
  let currentTimeZone;
  if (selectedOption === "tokyo") {
    currentTimeZone = moment().tz("Asia/Tokyo");
  } else if (selectedOption === "paris") {
    currentTimeZone = moment().tz("Eurpe/Paris");
  } else if (selectedOption === "sydney") {
    currentTimeZone = moment().tz("Australia/Sydney");
  }
  alert(`It is currently ${currentTime} in ${currentTimeZone}`);
}
