document.addEventListener('DOMContentLoaded', function() {
  function logout() {
    localStorage.removeItem('token');
    window.location.href = '/index.html';
  }
  window.logout = logout;
});