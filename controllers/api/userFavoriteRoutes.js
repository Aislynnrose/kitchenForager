const router = require("express").Router();
require("dotenv").config();
const apiKey = process.env.API_KEY;
const axios = require("axios");
const { User, Recipes } = require("../../models");

router.post("/searchByIngredients", async (req, res) => {
  // console.log(req.body);
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
      // console.log("response", response.data);
      // console.log("status", response.status);
      // console.log("id", response.data[0].id);
      if (response.status === 200) {
        axios
          .get(
            `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${response.data[0].id}/information`,
            {
              headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host":
                  "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            res.json(response.data);
          })
          .catch((err) => {
            console.error(err);
          });
        // router.render("/personalHomepage");
      } else {
        console.log("Failed to add dish");
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Recipes,
        attribute: ["id", "title", "image"],
      },
    ],
  })
    .then((userRecipes) => {
      if (!userRecipes) {
        res.status(400).json({ message: "No recipes found" });
        return;
      }
      res.json(userRecipes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/addFavorites", (req, res) => {
  Recipes.create({
    id: req.body.id,
    title: req.body.recipeTitle,
    image: req.body.recipeImg,
    link: req.body.recipeLink,
    user_id: req.session.user_id,
  })
    .then((recipe) => {
      console.log(recipe);
      Recipes.bulkCreate(recipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
