const homeBtn = document.querySelector('.homeBtn')
const loginBtn = document.querySelector('.loginBtn');

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
homeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  document.location.replace('/');
});

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  document.location.replace('/login');
});