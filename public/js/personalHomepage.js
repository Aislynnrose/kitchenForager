// const ingredients_text = document.querySelector('textarea[name="user_text"]').value;
console.log("I can actually work");
async function newFormHandler(event) {
  event.preventDefault();
  const response = await fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${}&number=5&ignorePantry=true&ranking=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  // Old fetch code
  // fetch(`/api/userFavoriteRoutes/ingredient`, {
  //   method: 'GET',
  //   body: JSON.stringify({
  //     ingredients_text,
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // if the dish is added, the 'all' template will be rerendered

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add dish");
  }
}

document
  .querySelector("#button-addon1")
  .addEventListener("click", newFormHandler);
