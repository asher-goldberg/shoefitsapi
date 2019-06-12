const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//set express framework to app variable
const app = express()

//get shoefits router from routes folder
const sheofitsroutes = require('./routes/shoefits')

console.log(process.env.DATABASE_URL)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//send requests from path /api/v1/shoefits to shoefits router
app.use('/api/v1/shoefits', sheofitsroutes)

app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.json(err.message)
})

module.exports = app
 