import { getAllImages, makeAvailable } from "./localStorage.js";

function handleEdit(button) {
  const parentElement = button.parentElement;
  const editableElements = parentElement.querySelectorAll(".editTag");

  editableElements.forEach((element) => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = element.textContent.trim();
    input.className = "inputs inputs-edit";

    input.style.width = `${element.offsetWidth}px`;
    input.style.height = `${element.offsetHeight}px`;
  });
}

function handleImages(element) {
  const allImages = getAllImages();
  const divPhotos = document.querySelector("#photos");

  const divElements = [];

  for (const image of allImages[element.textContent.toLowerCase()].slice(
    0,
    4,
  )) {
    divElements.push(
      `
                <div class="images">
                    <img src="${image}" class="edit"/>
                </div>
        `,
    );
  }

  divPhotos.innerHTML = divElements.join("");
}

function openRoom(element) {
  const id = element.parentElement.nextSibling.parentElement.id;

  if (makeAvailable(id)) window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document
      .querySelectorAll(".edit")
      .forEach((button) =>
        button.addEventListener("click", () => handleEdit(button)),
      );
  }, 1000);
  document
    .querySelectorAll(".page")
    .forEach((element) =>
      element.addEventListener("click", () => handleImages(element)),
    );

  document
    .querySelectorAll(".close")
    .forEach((element) =>
      element.addEventListener("click", () => openRoom(element)),
    );
});
