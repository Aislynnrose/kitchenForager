const registerFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.getElementById('firstName').value.trim();
  const last_name = document.getElementById('lastName').value.trim();
  const email = document.getElementById('emailLogin').value.trim();
  const password = document.getElementById('passwordLogin').value.trim();
  
  console.log(first_name, last_name, email, password);
  if (firstName && lastName && email && password) {
      const response = await fetch('/api/users/register', {
          method: 'POST',
          body: JSON.stringify({ first_name, last_name, email, password }),
          headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);

      if (response.ok) {
          document.location.replace('/personalHomepage');
      } else {
          alert('Failed to register');
      }
  }
};

homeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  document.location.replace('/');
});

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  document.location.replace('/login');
});

document
    .querySelector('.registerForm')
    .addEventListener('submit', registerFormHandler);
