const { Ingredients } = require('../models');

const ingredientsData = [
    {indredients_name: 'Carrot',
},
];

const seedData = () => Ingredients.bulkCreate(ingredientsData);

module.exports = seedData;