const router = require('express').Router();
const spoonacular = require('https://api.spoonacular.com/recipes/complexSearch')
const Dish = require('../../public/js/userFavorites');

// route to create/add a dish using async/await
router.get('/', async (req, res) => {
  try { 
    spoonacular = await Dish({
    query: req.query,
    cuisine: req.cuisine,
    diet: req.diet,
    intolerance: req.intolerance,
    includeIngredients: req.includeIngredients,
    instructionsRequired: req.instructionsRequired,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(dishData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;