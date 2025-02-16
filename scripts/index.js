import { getRole } from "./admin.js";

const isLogged = localStorage.getItem("isLogged");

function handleSign(e) {
  if (!isLogged) {
    const popup = document.querySelector(".popup");
    popup.style.display = "flex";

    if (e.target.value === "Login") {
      document.querySelector(".sign h1").textContent = "Login";
      document.querySelector("label[for=email]").style.display = "none";
      document.querySelector("input[type=email]").style.display = "none";
    } else {
      document.querySelector(".sign h1").textContent = "Register";
      document.querySelector("label[for=email]").style.display = "flex";
      document.querySelector("input[type=email]").style.display = "flex";
    }

    document.querySelector(".exit").addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
}

function adminInterface() {
  if (!(getRole() === "Admin")) {
    const adminView = document.querySelectorAll(".admin");

    adminView.forEach((tag) => (tag.style.display = "none"));
  }
}

document.querySelectorAll(".sign-button").forEach((button) => {
  button.addEventListener("click", (e) => handleSign(e));
});
document.addEventListener("DOMContentLoaded", () => adminInterface());
