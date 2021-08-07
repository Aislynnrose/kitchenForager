const sequelize = require("../config/connection");
const { Food } = require("../models");
const { Ingredients } = require("../models");
const { User } = require("../models");
const { DevsFavs } = require("../models")

const userData = require("./userData.json");
const ingredientsData = require("./ingredients.json");
const favFoodsData = require("./favFoods.json");
const devFavData = require("./devFavs.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Ingredients.bulkCreate(ingredientsData);
  await Food.bulkCreate(favFoodsData);
  await DevsFavs.bulkCreate(devFavData)
  
  process.exit(0);
};

seedDatabase();
