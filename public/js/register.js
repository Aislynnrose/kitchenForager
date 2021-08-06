const homeBtn = document.querySelector('.homeBtn')
homeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  document.location.replace('/');
});

const registrationHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#username-enetry').value.trim();
  const email = document.querySelector('#email-enetry').value.trim();
  const password = document.querySelector('#password-enetry').value.trim();
  if (username && email && password) {
      const response = await fetch('/api/user/registerUser', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json'},
      });
      if (response.ok) {
          document.location.replace('/');
      }else {
          alert('Please enter a valid username, email and password');
      }
  }else {
      alert('Please enter a valid username, email and password');
  }
};

document.querySelector('#register').addEventListener('click', registrationHandler);

/* let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});
 */
