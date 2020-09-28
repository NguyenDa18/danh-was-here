---
template: BlogPost
path: /nodejs-express-boilerplate
date: 2020-09-28T01:28:30.595Z
title: Boilerplate for Express Server
---

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
dotenv.config({ path: './config/config.env' })

// Connect to db function
connectDB()

// Routes

const app = express()

// Body parser
app.use(express.json())

// Set security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Enable CORS
app.use(cors())

// Mount routers
app.use('/api/v1/route', myroute)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode`))

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    
    // Close server & exit process
    server.close(() => process.exit(1))
})
```
