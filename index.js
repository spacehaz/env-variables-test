const express = require('express')
const app = express()
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const { PORT: PORT_DEV, SECRET: SECRET_DEV }  = require('./config.dev.json')
dotenv.config()
const { PORT = PORT_DEV, SECRET = SECRET_DEV } = process.env
const token = jwt.sign({ email: 'spacehaz@gmail.com' }, SECRET);
const decoded = jwt.verify(token, SECRET);
console.log({ SECRET, decoded })

app.listen(PORT, _ => console.log(`server is running at port ${PORT}`))
