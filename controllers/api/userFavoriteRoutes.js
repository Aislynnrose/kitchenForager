const router = require("express").Router();
require("dotenv").config();
const apiKey = process.env.API_KEY;
const axios = require("axios");

router.post("/personalHomepage", async (req, res) => {
  console.log(req.body);
  // console.log(res);
  axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${req.body.searchStr}&number=5&ignorePantry=true&ranking=1`,
      {
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      }
    )
    .then((response) => {
      console.log("response", response.data);
      if (response.ok) {
        document.location.replace("/personalHomepage");
      } else {
        console.log("Failed to add dish");
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
