document.addEventListener('DOMContentLoaded', () => {
 const form = document.getElementById("registration-form");

let btnSignup = document.getElementById("signUp");
let btnSignin = document.getElementById("signIn");
let nameInput = document.getElementById("name");  
let title = document.getElementById('title');



//-----------------------------------//

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const dataForm = new FormData(form);
  
  const dataUser = {
    username: dataForm.get('name'),
    email: dataForm.get('email'),
    phone: dataForm.get('phone'),
    password: dataForm.get('password')
  };
  
  try {
    const response = await fetch('https://fast-api-login.vercel.app/register', {
      method: 'POST',
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataUser)
    });
    
    const data = await response.json();
    
    if (response.ok) {
      btnSignup.innerText = 'Registro exitoso';
      setTimeout(function() {
        window.location.href = "/login.html"
      }, 2000);
    } else {
      alert(`Error ${data.detail}`);
    }
  } catch (error) {
    console.error('Error de conexión:', error.message);
    alert("Error de conexión. Vuelve a intentarlo. ");
  }
});
});



                          
