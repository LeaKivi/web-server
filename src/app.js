const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public/')))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weatherapp',
        name: 'Katalina Kivinen'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About me',
        name: 'Katalina Kivinen'
    })
})
app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help page',
        helpText: 'This application can show you weather'
    })
})

app.get('/weather', (req, res)=>{
    res.send({
        location: 'Espoo',
        forecast: 'Not too nice wather. Wet and cold :('
    })
})

// app.com => show homepage
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('server is up on port 3000')
})