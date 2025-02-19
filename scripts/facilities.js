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
          <h3>
        ${facility.title}
    </h3>
              <p>
                ${facility.description}
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
