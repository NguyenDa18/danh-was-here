---
template: BlogPost
path: /nodejs-express-boilerplate
date: 2020-09-28T01:28:30.595Z
title: Boilerplate for Express Server
metaDescription: 'script command not found, CLRF, LR, line endings for windows and linux'
tags: ["Quick Notes", "JavaScript"]
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1602135540/blog/butler-159811_1280_k67rp3.png
---
# How I set up MERN stack Node.js backends. Heavily inspired by projects made by Brad Traversy.
* Core image from [Pixabay](https://pixabay.com/vectors/butler-dining-dinner-service-159811/)

## Dependencies
- express : JS web server framework
- dotenv : read environment variables/config
- helmet : protect app


## Server setup

```js
// npm i -D nodemon express dotenv

const express = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')
const xss = require('xss-clean')

// Import routes
const route1 = require('./routes/route1')
const route2 = require('./routes/route2')

dotenv.config({ path: './config/config.env' })

// Connect to db function
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Body parser
app.use(express.json())

// Set security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Enable CORS
app.use(cors())

// Mount routers
app.use('/api/v1/route1', myroute1)
app.use('/api/v1/route2', myroute2)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode`))

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    
    // Close server & exit process
    server.close(() => process.exit(1))
})
```
