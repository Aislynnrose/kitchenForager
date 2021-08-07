const User = require('./User');
const Food = require('./Food');
const Ingredients = require('./Ingredients');
const DevsFavs = require('./DevsFavs');

Ingredients.belongsTo(Food, {
  foreignKey: 'food_id',
  onDelete: 'CASCADE'
});

Food.hasMany(Ingredients, {
  foreignKey: 'food_id'
});


module.exports = { User, Food, Ingredients, DevsFavs };