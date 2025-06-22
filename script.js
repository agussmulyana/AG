
document.querySelectorAll('.sidebar-menu button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-menu button').forEach(b => b.classList.remove('active'));
    const pageId = `page-${button.getAttribute('data-page')}`;
    document.getElementById(pageId).classList.add('active');
    button.classList.add('active');
  });
});

function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  const loginError = document.getElementById('loginError');
  if (user === 'admin' && pass === 'admin') {
    document.getElementById('loginOverlay').style.display = 'none';
  } else {
    loginError.textContent = 'Username atau password salah.';
  }
}

function logout() {
  document.getElementById('loginOverlay').style.display = 'flex';
}
