function getUsers() {
  return JSON.parse(localStorage.getItem('usuaris')) || {};
}
function saveUsers(users) {
  localStorage.setItem('usuaris', JSON.stringify(users));
}
function getUsuariActiu() {
  return localStorage.getItem('usuariActiu');
}
