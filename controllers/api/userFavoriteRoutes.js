const router = require("express").Router();
require("dotenv").config();
const apiKey = process.env.API_KEY;
let byIngredient = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${apiKey}`;
const axios = require("axios");

router.get("/personalHomepage", async function newFormHandler(event) {
  event.preventDefault();
  fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert('Failed to add dish');
  }
});

module.exports = router;
