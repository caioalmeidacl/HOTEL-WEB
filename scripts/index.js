import {
  getUsers,
  getRole,
  getUser,
  setUser,
  setRole,
  updateBD,
  removeUser,
} from "./localStorage.js";

// updateBD({
//   name: "caio",
//   email: "caio@caio.com",
//   password: "123",
//   role: "Admin",
// });

function handlePopup(e) {
  const popup = document.querySelector(".popup");
  const email = document.querySelector("input[type=email]");
  const typeSign = document.querySelector(".sign h1");
  popup.style.display = "flex";

  if (e.target.value === "Login") {
    typeSign.textContent = "Login";
    document.querySelector("label[for=email]").style.display = "none";
    email.style.display = "none";
    email.removeAttribute("required");
  } else {
    typeSign.textContent = "Register";
    document.querySelector("label[for=email]").style.display = "flex";
    email.style.display = "flex";
    email.setAttribute("required", true);
  }

  document.querySelector(".exit").addEventListener("click", () => {
    popup.style.display = "none";
  });

  document
    .querySelector("form")
    .addEventListener("submit", (e) => handleSign(e, typeSign.textContent));
}

function handleSign(event, typeSign) {
  event.preventDefault();

  const name = event.target[0].value;
  const password = event.target[2].value;

  if (typeSign === "Login") {
    for (const user of getUsers()) {
      if (user.name === name && user.password === password) {
        login(user);
        break;
      }
    }
  } else {
    const email = event.target[1].value;
    updateBD({
      name: name,
      email: email,
      password: password,
      role: "Client",
    });

    login({ name, role: "Client" });
  }

  document.querySelector(".popup").style.display = "none";
  location.reload();
}

function login(user) {
  setUser(user.name);
  setRole(user.role);
}

function logout() {
  removeUser();
  location.reload();
}

function isLogged() {
  if (getUser() && getRole()) {
    document.querySelector(".isNotLogged").style.display = "none";
    const tag = document.querySelector(".isLogged");
    tag.style.display = "flex";
    tag.children[0].setAttribute("value", JSON.parse(getUser()));

    return true;
  }

  return false;
}

function addHeaderEvents() {
  document.querySelectorAll(".sign-button").forEach((button) => {
    button.addEventListener("click", (e) => handlePopup(e));
  });
  document.querySelector(".logout").addEventListener("click", () => logout());
}

function adminInterface() {
  if (!(JSON.parse(getRole()) === "Admin")) {
    const adminView = document.querySelectorAll(".admin");

    adminView.forEach((tag) => (tag.style.display = "none"));
  }
}

function loadContent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      addHeaderEvents();
      adminInterface();
      isLogged();
    })
    .catch((error) => console.error(`Erro ao carregar ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadContent("header", "../header.html");
});
