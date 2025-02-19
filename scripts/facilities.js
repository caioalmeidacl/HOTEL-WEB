import { getAllFacilities } from "./localStorage.js";

function displayVisiblesFacilities(showAll) {
  const data = getAllFacilities();
  const div = document.querySelector("#facilities");

  let facilitiesHTML = [];

  for (const facility of data.facilities) {
    if (showAll || facility.isVisible) {
      facilitiesHTML.push(`
        <div class="facility">
          <img src="${facility.icon}" />
          <h3 class="editTag">
        ${facility.title}
                    <img src="${data.icons.edit}" class="edit" />
    </h3>
              <p class="editTag">
                ${facility.description}
                <img src="${data.icons.edit}" class="edit" />
          </p>
        </div>
    `);
    }
  }
  div.innerHTML = facilitiesHTML.join("");
}

document.addEventListener("DOMContentLoaded", () => {
  displayVisiblesFacilities(false);
});
