const router = require('express').Router();
require("dotenv").config();
const apiKey = process.env.API_KEY
let byIngredient = (`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${apiKey}`)
const axios = require('axios')

router.get('/ingredient', async function getByIngredient() {
  try {
    const response = await axios.get(byIngredient);
    console.log(byIngredient);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;