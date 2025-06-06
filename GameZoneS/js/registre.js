document.getElementById('registre-form').addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const usuaris = getUsers();
  if (usuaris[username] || Object.values(usuaris).some(u => u.email === email)) {
    document.getElementById('missatge').textContent = 'Usuari o correu ja registrat';
    return;
  }
  usuaris[username] = { email, password };
  saveUsers(usuaris);
  document.getElementById('missatge').textContent = 'Registre complet!';
});
