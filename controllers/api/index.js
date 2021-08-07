const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userFavorites = require('./userFavoriteRoutes');

router.use('/users', userRoutes);
router.use('/userFavoriteRoutes', userFavorites);

module.exports = router;