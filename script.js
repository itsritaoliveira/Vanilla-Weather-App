function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let input = document.querySelector("#search-form");
  cityElement.innerHTML = input.value;
}

let form = document.querySelector("#form");
form.addEventListener("submit", searchCity);
