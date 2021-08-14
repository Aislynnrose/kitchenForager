const router = require("express").Router();
const { User, DevsFavs, Recipes } = require("../models");
const withAuth = require("../utils/auth");
const recipeData = require("../seeds/recipes.json"); 

router.get("/", async (req, res) => {
  try {
    const dbDevsFavsData = await DevsFavs.findAll({});

    const devsfavorites = dbDevsFavsData.map((devsfavs) =>
      devsfavs.get({ plain: true })
    );

    res.render("homepage", {
      devsfavorites,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("register");
});

router.get("/personalHomepage", withAuth, async (req, res) => {
  const dbDevsFavsData = await DevsFavs.findAll({});
  
  const devsfavorites = dbDevsFavsData.map((devsfavs) =>
    devsfavs.get({ plain: true })
  );
  console.log(recipeData);
  const dbUserFavsData = await Recipes.findAll({});
  
  const userFavorites = dbUserFavsData.map((recipes) =>
  recipes.get({ plain: true })
  );
  res.render("personalHomepage", {
    recipeData, userFavorites,
  });


});

module.exports = router;
