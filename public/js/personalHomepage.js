const ingredients_text = document.querySelector('textarea[name="user_text"]').value;


async function newFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/favoriteRoutes`, {
      method: 'GET',
      body: JSON.stringify({
        ingredients_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add dish');
    }
}

document.querySelector('').addEventListener('submit', newFormHandler);