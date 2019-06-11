module.exports.validShoeID = function (req,res,next) {
    if (isNaN(req.params.id)) {
        const error = new Error('shoeID must be numeric')
        error.status = 400
        next(error)
    }
    else {
        /*Normally this would access a Model of shoeIDs from a different table
        but for the purpose this example it's just going to be a static array 
        of ID #s to see if the shoe "exists" in the database */
        const shoeIDs = [1,2,3,4]
        if (shoeIDs.indexOf(Number (req.params.id)) === -1) {
            const error = new Error('shoeID not found')
            error.status = 400
            next(error)
        }
    }
    next()
}

module.exports.validFitValue = function (req,res,next) {
    if (isNaN(req.body.fitValue)) {
        const error = new Error('fit value must be numeric')
        error.status = 400
        next(error)
    }
    else if (!(req.body.fitValue >= 1 && req.body.fitValue <=5)) {
        const error = new Error('fit value must be between 1 and 5')
        error.status = 400
        next(error)
    }
    next()
}