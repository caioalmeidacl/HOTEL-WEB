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

export function bookRoom(id) {
  if (getUser()) {
    updateRoom(id, false);
    return true;
  }
}

export function getRooms() {
  const rooms = localStorage.getItem("rooms");
  return rooms ? JSON.parse(rooms) : null;
}

export function updateRoom(roomId, newStatus) {
  let data = getRooms();

  data.rooms = data.rooms.map((room) =>
    room.id == roomId ? { ...room, isAvailable: newStatus } : room,
  );

  localStorage.setItem("rooms", JSON.stringify(data));

  return data;
}

export function makeAvailable(id) {
  if (getUser()) {
    updateRoom(id, true);
    return true;
  }

  return false;
}

export function getAllFacilities() {
  const facilities = localStorage.getItem("facilities");

  return facilities ? JSON.parse(facilities) : null;
}

export function getHomeImages() {
  const images = localStorage.getItem("images");
  const parsedJSON = JSON.parse(images);

  return images ? parsedJSON.home : null;
}

export function editPhoto(old, newSrc) {
  const images = JSON.parse(localStorage.getItem("images")) || initial_images;

  const updatedHome = images.home.map((image) =>
    image.src === old ? { ...image, src: newSrc } : image,
  );

  const updatedImages = { ...images, home: updatedHome };

  localStorage.setItem("images", JSON.stringify(updatedImages));
}
