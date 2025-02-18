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

async function fetchImages() {
  try {
    const data = await fetch("../images.json");
    return data.json();
  } catch (e) {
    console.log(error);
  }
}

async function handleImages(element) {
  try {
    const allImages = await fetchImages();
    const divPhotos = document.querySelector("#photos");

    const divElements = [];

    for (const page in allImages) {
      if (page.toLowerCase() == element.textContent.toLowerCase()) {
        for (const image of allImages[page]) {
          divElements.push(
            `
                <div class="images">
                    <img src="../${image.src}" />
                </div>
        `,
          );
        }
      }
    }

    divPhotos.innerHTML = divElements.join("");
  } catch (e) {
    console.log(e);
  }
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
});
