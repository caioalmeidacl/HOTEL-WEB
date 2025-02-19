import { makeAvailable } from "./localStorage.js";

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
