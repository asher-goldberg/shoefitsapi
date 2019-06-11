const Knex = require('knex')
const connection = require('./knexfile')
const { Model } = require('objection')
const env = process.env.NODE_ENV || 'development'
const knexConnection = Knex(connection[env])
Model.knex(knexConnection)

module.exports = {
    Model, knexConnection
}