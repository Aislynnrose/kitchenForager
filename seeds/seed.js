const sequelize = require("../config/connection");
const { Food } = require("../models");
const { Ingredients } = require("../models");
const { User } = require("../models");

const userData = require("./userData.json");
const ingredientsData = require("./ingredients.json");
const favFoodsData = require("./favFoods.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Ingredients.bulkCreate(ingredientsData);
  await Food.bulkCreate(favFoodsData);

  process.exit(0);
};

seedDatabase();
