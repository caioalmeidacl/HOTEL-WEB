import { getAllImages, makeAvailable } from "./localStorage.js";

const iconEdit = "../images/edit-button-white.svg";

function handleEdit(button) {
  const parentElement = button.parentElement;
  const editableElement = parentElement.querySelector(".editableTag");

  if (!editableElement) return;

  let input;

  if (editableElement.tagName === "IMG") {
    input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.className = "inputs inputs-edit";
  } else if (
    editableElement.tagName === "H3" ||
    editableElement.tagName === "P"
  ) {
    input = document.createElement("input");
    input.type = "text";
    input.value = editableElement.textContent.trim();
    input.className = "inputs inputs-edit";
  } else {
    return;
  }

  input.style.width = `${editableElement.offsetWidth}px`;
  input.style.height = `${editableElement.offsetHeight}px`;

  editableElement.replaceWith(input);

  input.focus();

  // Adiciona um event listener para salvar as alterações quando o input perder o foco
  input.addEventListener("blur", () => {
    if (editableElement.tagName === "IMG") {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          editableElement.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    } else {
      editableElement.textContent = input.value;
    }

    input.replaceWith(editableElement);
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
                    <img src="${image}" class="editableTag" />
                    <img src="${iconEdit}" class="edit"/>
                </div>
        `,
    );
  }

  divPhotos.innerHTML = divElements.join("");

  loadEvent();
}

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
