export function getRole() {
  const user = localStorage.getItem("user");

  if (!user) return null;

  const role = localStorage.getItem("role");

  return role;
}
