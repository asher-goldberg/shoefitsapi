const k = require('../db/index')
const knex = k.knexConnection

//bring in supertest library for HTTP testing
const request = require('supertest')

//bring in actual Express app from main app.js file
const app = require('../app')


describe('Shoe Fit Tests', () => {
    /*before((done) => {
        //run migrations to recreate table from scratch
        knex.migrate.latest()
            .then(() => {
                //run seeds to fill with sample data
                return knex.seed.run()
            }).then(() => done())
    })*/

    it('Lists shoefits for shoeID = 1', (done) => {
        request(app)
        .get('/api/v1/shoefits/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('return data single shoe average fit when shoeID = 1', (done) => {
        request(app)
        .get('/api/v1/shoefits/TrueToSizeCalculation/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('POST shoe fit successfully when data meets requirements', (done) => {
        request(app)
        .post('/api/v1/shoefits/1')
        .send({fitValue: 3})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done)
    })

    it('get error when shoeID is invalid', (done) => {
        request(app)
        .post('/api/v1/shoefits/100')
        .send({fitValue: 3})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, done)
    })

    it('get error when fitValue is out of range', (done) => {
        request(app)
        .post('/api/v1/shoefits/1')
        .send({fitValue: 100})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect('"fit value must be between 1 and 5"')
        .expect(400, done)
    })
})