const loginBtn = document.querySelector('.loginBtn');
const registerBtn = document.querySelector('.registerBtn');

loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/login');
});

registerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/register');
});
