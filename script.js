const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggle-password');
const loginForm = document.getElementById('login-form');

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
  toggleBtn.textContent = isPassword ? '🙈' : '👁️';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});