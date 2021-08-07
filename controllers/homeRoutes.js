const router = require("express").Router();
const { User, DevsFavs } = require("../models");
const withAuth = require("../utils/auth");

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
  res.render("personalHomepage");
});

module.exports = router;
