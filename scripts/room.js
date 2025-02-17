function displayAvailableRooms(showAll) {
  const data = JSON.parse(localStorage.getItem("rooms"));
  if (!data) {
    return;
  }
  const div = document.querySelector("#rooms");
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");

  let roomsHTML = [];

  for (const room of data.rooms) {
    if (showAll || (room.isAvailable && room.category == selectedCategory)) {
      roomsHTML.push(`
        <div class="room">
            <div class="picture">
            <span class="category">${room.category}</span>
            <img src="${room.image}" />
            </div>
            <div class="room-info">
            <h1>${room.name}</h1>
            <h2>${room.currency}${room.price}<span class="period">${room.period}</span></h2>
            </div>
            <div class="room-measures">
            <span>
            <img src="${data.icons.size}" />
            <h3>${room.details.size}</h3>
            </span>
            <span>
            <img src="${data.icons.capacity}" />
            <h3>${room.details.capacity}</h3>
            </span>
            <span>
            <img src="${data.icons.beds}" />
            <h3>${room.details.beds}</h3>
            </span>
            <span>
            <img src="${data.icons.bathrooms}" />
            <h3>${room.details.bathrooms}</h3>
            </span>
            <input type="button" value="Book Now" class="button" />
            </div>
        </div>
    `);
    }
  }
  div.innerHTML = roomsHTML.join();
}

document.querySelector("#buttonAll").addEventListener("click", () => {
  displayAvailableRooms(true);
});

document.addEventListener("DOMContentLoaded", () =>
  displayAvailableRooms(false),
);
