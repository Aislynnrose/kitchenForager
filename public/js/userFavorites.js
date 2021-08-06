async function newFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/userFavoriteRoutes`, {
      method: 'GET',
      body: JSON.stringify({
        query,
        cuisine,
        diet,
        intolerance,
        includeIngredients,
        instructionsRequired,
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

// install node fetch to use fetch on backend