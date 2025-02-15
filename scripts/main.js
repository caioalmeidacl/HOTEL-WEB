async function getRooms() {
  try {
    const response = await fetch("http://localhost:8000/rooms.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function displayAvailableRooms() {
  const data = await getRooms();
  const div = document.querySelector("#rooms");

  for (const room of data.rooms) {
    if (room.isAvailable) {
      const template = `
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
    `;
      div.innerHTML += template;
    }
  }
}

displayAvailableRooms();
