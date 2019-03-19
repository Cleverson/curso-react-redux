const PORT = 3003
const bodyParse = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const server = express()

server.use(bodyParse.urlencoded({ extended: true }))
server.use(bodyParse.json())
server.use(allowCors)
server.use(queryParser())

server.listen(PORT, () => {
	console.log(`BACKEND rodando na porta ${PORT}.`)
})

module.exports = server
