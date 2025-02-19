function checkAvailability(event) {
  event.preventDefault();
  const values = [];

  document.querySelectorAll("input[type=text]").forEach((input) => {
    values.push(input.value);
  });

  window.location.href = `../pages/available-rooms-client.html?category=All&guests=${values[3]}`;
}

document
  .querySelector(".form")
  .addEventListener("submit", (event) => checkAvailability(event));
