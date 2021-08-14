const router = require("express").Router();
const { User, DevsFavs } = require("../models");
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
  res.render("personalHomepage", {
    recipeData,
  });
});

module.exports = router;
