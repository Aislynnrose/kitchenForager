const homeBtn = document.querySelector('.homeBtn');
homeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/');
});

const loginHeader = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/personalHomepage');
            alert('Login Successful!');
        }else {
            alert('Please enter a valid email and password.');
        };
    };
};

document.querySelector('#login').addEventListener('click', loginHeader);

// const registerBtn = document.querySelector('.registerBtn');

// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     console.log("help me")
//     const email = document.getElementById('emailLogin').value.trim();
//     console.log("Hello");
//     const password = document.getElementById('passwordLogin').value.trim();
    
//     console.log(email, password);
//     if (email && password) {
//         const response = await fetch('/api/users/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         console.log(response);

//         if (response.ok) {
//             document.location.replace('/personalHomepage');
//         } else {
//             alert('Failed to log in');
//         }
//     }
// };

// homeBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//     document.location.replace('/');
// });

// registerBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//     document.location.replace('/register');
// });
