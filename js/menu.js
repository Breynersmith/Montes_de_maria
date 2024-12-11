document.addEventListener('DOMContentLoaded', () => {
  const menubar = document.getElementById("menu-bar")
  
  const navbar = document.getElementById('navbar')
  
  menubar.addEventListener('click', () => {
    navbar.classList.toggle("show-navbar")
  })
} )