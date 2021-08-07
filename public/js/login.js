const registerBtn = document.querySelector('.registerBtn');

const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log("help me")
    const email = document.getElementById('emailLogin').value.trim();
    console.log("Hello");
    const password = document.getElementById('passwordLogin').value.trim();
    
    console.log(email, password);
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response);

        if (response.ok) {
            document.location.replace('/personalHomepage');
        } else {
            alert('Failed to log in');
        }
    }
};

homeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/');
});

registerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/register');
});
