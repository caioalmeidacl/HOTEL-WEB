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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document
      .querySelectorAll(".edit")
      .forEach((button) =>
        button.addEventListener("click", () => handleEdit(button)),
      );
  }, 1000);
});
