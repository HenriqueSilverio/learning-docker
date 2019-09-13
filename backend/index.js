const express = require('express')
const server = express()
server.get('/', (req, res) => res.send('<h1>Backend</h1>'))
server.listen(3000, () => console.log('Listening on port 3000...'))
