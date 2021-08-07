const router = require('express').Router();
// const spoonacular = require('https://api.spoonacular.com/recipes/complexSearch')
const Dish = require('../../public/js/userFavorites');
const Fetch = require('node-fetch');

// route to create/add a dish using async/await
router.get('/', async (req, res) => {
  console.log({...req.body});//should log an object that is exactlly the same as below
  
  try { 
    const recipeReturned = await Dish({
      query: req.body.query,
      cuisine: req.body.cuisine,
      // diet: req.body.diet,
      // intolerance: req.body.intolerance,
      includeIngredients: req.body.includeIngredients,
      instructionsRequired: req.body.instructionsRequired,
    });
  // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(recipeReturned)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;