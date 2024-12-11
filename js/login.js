const form = document.getElementById("login-form")
const loginBtn = document.getElementById("loginBtn")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  
  const dataForm = new FormData(form)
  
  const dataUser = {
    email : dataForm.get("email"),
    password : dataForm.get("password")
  }
  if (dataUser.email && dataUser.password) {
    
    if (dataUser.email === localStorage.getItem('email', dataUser.email) && dataUser.password === localStorage.getItem('password', dataUser.password)){
      loginBtn.innerText= 'Iniciando Sesion...'
      setTimeout(function() {
        window.location.href = '/usuario.html'
      }, 2000);

    }
    
    else {
      alert("datos invalidos")
    }
      
    } else {
      console.log("Todos los campos son obligatorios.");
    }
} )