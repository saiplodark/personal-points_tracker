require ('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const {login, register, logout, userSession} = require('./contorllers/authCtrl')

const app = express()

app.use(express.json())
app.use(session({
    secret:SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000*60*60*24*14
    }
}))

massive({
    connectionString:CONNECTION_STRING,
    ssl:{rejectUnauthorized:false}
}).then(db =>{
    app.set('db', db)
    console.log('db testing connected')
}).catch(err => console.log('error, can not connect'))

//AUTH//
app.post('/auth/register', register)
app.post('/auth/login', login)
app.get('/auth/logout', logout)
app.get('/auth/user_session', userSession)

//CARDS//
//If doing for allbanks
//app.get('/api/cards/:bank', getCards)
//will need bank name at cards TABLE
//Amex//
app.get('/api/cards/amex', getCards)
app.post('/api/addcards/amex', addCards)
app.put('/api/editcards/amex/:id', editCards)
app.delete('/api/deletecards/amex/:id', deleteCards)
//Chase//
app.get('/api/cards/chase', getCards)
app.post('/api/addcards/chase', addCards)
app.put('/api/editcards/chase/:id', editCards)
app.delete('/api/deletecards/chase/:id', deleteCards)
//Citi//
app.get('/api/cards/citi', getCards)
app.post('/api/addcards/citi', addCards)
app.put('/api/editcards/citi/:id', editCards)
app.delete('/api/deletecards/citi/:id', deleteCards)


app.listen(SERVER_PORT, ()=>{
    console.log(`Server testing on port ${SERVER_PORT}`)
})