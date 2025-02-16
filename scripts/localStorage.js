export function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : null;
}
export function getRole() {
  if (!localStorage.getItem("user")) return false;

  return localStorage.getItem("role");
}

export function getUser() {
  return localStorage.getItem("user");
}

export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function setRole(role) {
  localStorage.setItem("role", JSON.stringify(role));
}

export function removeUser() {
  localStorage.removeItem("user");
  localStorage.removeItem("role");
}

export function updateBD(user) {
  let users = getUsers();

  if (!users) {
    users = [];
  }

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
}
