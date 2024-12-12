const form = document.getElementById("login-form")
const loginBtn = document.getElementById("loginBtn")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  
  const dataForm = new FormData(form)
  
  const dataUser = {
    email : dataForm.get("email"),
    password : dataForm.get("password")
  }
  try {
    const response = await fetch("https://fast-api-login.vercel.app/login/",{
      method : 'POST',
      headers : {
        "Content-Type" : 'application/json'
      },
      body : JSON.stringify(dataUser)
    })
    
    const data = await response
    
    if (response.ok) {
      loginBtn.innerText = "Iniciando Sesion..."
      setTimeout(function() {
        window.location.href = "/usuario.html"
      }, 3000);
      
    } else {
      alert("Error de Conexion")
      console.log(data)
    }
  } catch (e) {
    console.log(e)
  }
} )
