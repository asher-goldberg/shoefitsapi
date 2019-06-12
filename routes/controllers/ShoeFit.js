const ShoeFit = require('../../db/models/shoefits')

//export the model component that gets shoe fits by ShoeId parameter
module.exports.getShoeFits = async (req, res, next) => {
    await ShoeFit.query()
    .where('shoeId', req.params.id)
    .then(shoefits => {
        res.json(shoefits)
    })
}

//export the model component that gets the average fit value by ShoeId parameter
module.exports.getShoeFitAverage = async (req, res, next) => {
    await ShoeFit.query().count('fitValue').avg('fitValue')
    .where('shoeId', req.params.id)
    .then(shoefits => {
        res.json({shoeId: req.params.id, 
            TrueToSizeCalculation: Math.round(shoefits[0].avg*100)/100, 
            countValues: shoefits[0].count})
    })
}

//export the model component to add a new shoe fit from a POST request
module.exports.addShoeFit = async (req, res, next) => {
    const shoefit = await ShoeFit.query()
    .insert({shoeId : Number (req.params.id), fitValue: Number (req.body.fitValue)}).catch()
    res.status(201).json(shoefit)
}