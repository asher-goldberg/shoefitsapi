const express = require ('express')

const router = express.Router({mergeParams: true})

//include controller for router destination 
const ShoeFitsController = require('./controllers/ShoeFit')

//include middleware for error handling / basic input validation
const ShoeFitsMiddleware = require('./middleware/ShoeFit');

//route to get all shoe fits for a given shoe ID
router.get('/:id', [ShoeFitsMiddleware.validShoeID], ShoeFitsController.getShoeFits)

//route to get average of shoe fits for a given shoe ID
router.get('/TrueToSizeCalculation/:id', [ShoeFitsMiddleware.validShoeID], ShoeFitsController.getShoeFitAverage)

//route to add a new shoe fit by shoe ID
router.post('/:id', [ShoeFitsMiddleware.validShoeID, ShoeFitsMiddleware.validFitValue], ShoeFitsController.addShoeFit)

module.exports = router