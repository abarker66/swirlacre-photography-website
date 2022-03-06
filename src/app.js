const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3001

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// set up static dir to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Swirlacre Photography',
        name: 'Andrew Barker'
    })
})

app.get('/weddings', (req, res) => {
    res.render('weddings', {
        title: 'Wedding Photography',
        name: 'Andrew Barker'
    })
})

app.get('/athome', (req, res) => {
    res.render('athome', {
        title: 'Photography at home',
        name: 'Andrew Barker'
    })
})

app.get('/pets', (req, res) => {
    res.render('pets', {
        title: 'Pet Photography',
        name: 'Andrew Barker'
    })
})

app.get('/landscape', (req, res) => {
    res.render('landscape', {
        title: 'Landscape Photography',
        name: 'Andrew Barker'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Barker'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        contacttext: 'Contact Details',
        name: 'Andrew Barker'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404-page', {
        title: 'Help Page not found',
        message: 'Help Page not found - go to home page',
        name: 'Andrew Barker'
    })
})

// match anything not matched so far
app.get('*', (req, res) => {
    res.render('404-page', {
        title: 'Page not found!',
        message: 'Page not found - go to home page',
        name: 'Andrew Barker'
    })
})

// start the server
app.listen(port, () => {
    console.log('Server is running on port ' + port)
})