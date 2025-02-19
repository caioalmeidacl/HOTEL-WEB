import {
  getAllImages,
  makeAvailable,
  editPhoto,
  editFacility,
} from "./localStorage.js";

function loadEvent() {
  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", () => handleEdit(button));
  });
}

function openRoom(element) {
  const id = element.parentElement.nextSibling.parentElement.id;

  if (makeAvailable(id)) window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".close")
    .forEach((element) =>
      element.addEventListener("click", () => openRoom(element)),
    );
});
