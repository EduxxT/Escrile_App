document.addEventListener('DOMContentLoaded', function() {
  function logout() {
    localStorage.removeItem('token');
    window.location.href = '/www/index.html';
  }
  window.logout = logout;
});