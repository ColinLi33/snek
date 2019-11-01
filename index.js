const express = require('express')
const app = express()

app.use(express.static('public'))


app.get('/', (req, res) => res.render('index.html'))

app.listen(process.env.PORT || 3333, () => console.log('Example app listening'))
