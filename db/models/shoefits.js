const { Model } = require('../index')

class ShoeFit extends Model {
    static get tableName() {
        return 'shoefits'
    }

    static get jsonSchema() {
        return {
            type : 'object',
            required: ['shoeId', 'fitValue'],
            properties: {
                id: {type: 'integer'},
                shoeId: {type: 'number'},
                fitValue: {type : 'number', minLength: 1, maxLength: 1}
            }
        }
    }
}

module.exports = ShoeFit
