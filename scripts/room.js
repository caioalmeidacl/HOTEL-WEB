import { getRooms, bookRoom } from "./localStorage.js";

const iconEdit = "../images/edit-button-orange.svg";

function handleBook(element) {
  const id = element.parentElement.nextSibling.parentElement.id;

  if (bookRoom(id)) window.location.reload();
}

function displayAvailableRooms(showAll) {
  const data = getRooms();

  if (!data) {
    return;
  }
  const div = document.querySelector("#rooms");
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");
  const guests = urlParams.get("guests") ? Number(urlParams.get("guests")) : 0;

  let roomsHTML = [];

  if (urlParams.size > 0) {
    for (const room of data.rooms) {
      if (room.isAvailable) {
        const categoryMatch =
          showAll ||
          selectedCategory === "All" ||
          room.category === selectedCategory;
        const guestMatch = guests === 0 || guests <= room.details.capacity;

        if (categoryMatch && guestMatch) {
          roomsHTML.push(`
            <div id="${room.id}" class="room">
                <div class="picture">
                <span class="category">${room.category}</span>
                <div class="images-room">
                    <img src="${room.image}" class="image editableTag" />
                    <img src="${iconEdit}" class="image edit" />
                </div>
                </div>
                <div class="room-info">
                <h1>${room.name}</h1>
                <h2>${room.currency}${room.price}<span class="period">${room.period}</span></h2>
                </div>
                <div class="room-measures">
                <span>
                <img src="${data.icons.size}" />
                <h3 class="size">${room.details.size}</h3>
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
                <input type="button" value="Book Now" class="button book" />
                </div>
            </div>
        `);
        }
      }
    }
  } else {
    for (const room of data.rooms) {
      if (!room.isAvailable) {
        roomsHTML.push(`
            <div id="${room.id}" class="room">
                <div class="picture">
                <span class="category">${room.category}</span>
                <span class="category closed">Closed</span>
                <img src="${room.image}" class="image" />
                </div>
                <div class="room-info">
                <h1>${room.name}</h1>
                <h2>${room.currency}${room.price}<span class="period">${room.period}</span></h2>
                </div>
                <div class="room-measures">
                <span>
                <img src="${data.icons.size}" />
                <h3 class="size">${room.details.size}</h3>
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
                <input type="button" value="Reopen" class="button close" />
                </div>
            </div>
        `);
      }
    }
  }
  div.innerHTML = roomsHTML.join("");
}

document.querySelector("#buttonAll")?.addEventListener("click", () => {
  displayAvailableRooms(true);
});

document.addEventListener("DOMContentLoaded", () => {
  displayAvailableRooms(false);
  document
    .querySelectorAll(".book")
    .forEach((element) =>
      element.addEventListener("click", () => handleBook(element)),
    );
});
