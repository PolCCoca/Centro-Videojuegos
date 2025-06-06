document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const metode = document.getElementById('metode').value;
  const loginId = document.getElementById('login-id').value.trim();
  const password = document.getElementById('login-password').value;
  const usuaris = getUsers();
  let usuariTrobat = null;
  for (const [usuari, data] of Object.entries(usuaris)) {
    if ((metode === 'usuari' && usuari === loginId) || (metode === 'email' && data.email === loginId)) {
      if (data.password === password) {
        usuariTrobat = usuari;
        break;
      }
    }
  }
  if (usuariTrobat) {
    localStorage.setItem('usuariActiu', usuariTrobat);
    window.location.href = 'gamezone.html';
  } else {
    document.getElementById('login-missatge').textContent = 'Credencials incorrectes';
  }
});
