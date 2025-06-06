const usuari = getUsuariActiu();
if (!usuari) window.location.href = 'index.html';

document.getElementById('usuari-nom').textContent = usuari;
document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('usuariActiu');
  window.location.href = 'index.html';
});

function jugarRedirigir(url) {
  window.open(url, '_blank');
}
