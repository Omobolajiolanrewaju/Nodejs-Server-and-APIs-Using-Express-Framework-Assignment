const express = require('express')
const itemRouter = require('./api-router')

const PORT = 4002

const app = express()


app.use('/items', itemRouter)

app.get('*', (req, res) => {
    res.status(404).json({
        data: null,
        error: 'Route not found'
    })
})



app.listen(PORT, () => { // start server, listen for connections
    console.log(`Listening on port: $localhost:${PORT}`)
})