const axios = require('axios')

const dotenv = require('dotenv')

dotenv.config()

const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')

const cors = require('cors')

const apikey = process.env.API_KEY

app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/api', async (req, res) => {
    url = req.body.url

    const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url=${url}&lang=en`)
    console.log('response is' + response)
    console.log('API KEY is' + apikey)

    const Data = Object.assign({}, response.data)
    console.log('DATA IS :' + Data)

    const requiredData = {
        text: Data.sentence_list[0].text,
        score_tag: Data.score_tag,
        agreement: Data.agreement,
        subjectivity: Data.subjectivity,
        confidence: Data.confidence,
        irony: Data.irony
    }
    console.log(requiredData)
    res.send(requiredData)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(8083, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port 8083!`)
})
