function displayCurrentTime(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("MMMM D, YYYY HH:MM A");
    alert(`It is currently ${currentTime} in ${event.target.value}`);
  }
}
let currentTime = document.querySelector("#city");
currentTime.addEventListener("change", displayCurrentTime);
