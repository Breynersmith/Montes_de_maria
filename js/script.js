document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("registration-form");

  let btnSignup = document.getElementById("signUp");
  let btnSignin = document.getElementById("signIn");
  let nameInput = document.getElementById("name");  
  let title = document.getElementById('title');

  //-----------------------------------//

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const dataForm = new FormData(form);
    
    const dataUser = {
      username: dataForm.get('name'),
      email: dataForm.get('email'),
      phone: dataForm.get('phone'),
      password: dataForm.get('password')
    };
    
    if (dataUser.username && dataUser.email && dataUser.phone && dataUser.password) {
      localStorage.setItem('username', dataUser.username);
      localStorage.setItem('email', dataUser.email);
      localStorage.setItem('phone', dataUser.phone);
      localStorage.setItem('password', dataUser.password);
      
      btnSignup.innerText= 'Registro Exitoso'
      setTimeout(function() {
        window.location.href = '/login.html#general-login'
      }, 2000);

      console.log(localStorage.getItem('username'));
    } else {
      console.log("Todos los campos son obligatorios.");
    }
  });
});
