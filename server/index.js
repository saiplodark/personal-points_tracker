require ('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const path = require('path');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const {login, register, signout, userSession} = require('./contorllers/authCtrl')
const{getCards, addCards, deleteCards,updateCards,combinePoints} = require('./contorllers/cardsCtrl')

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
app.use( express.static( `${__dirname}/../build` ) );

massive({
    connectionString:CONNECTION_STRING,
    ssl:{rejectUnauthorized:false}
}).then(db =>{
    app.set('db', db)
    console.log('db testing connected')
}).catch(err => console.log('error, can not connect',err))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

//AUTH//
app.post('/auth/register', register)
app.post('/auth/login', login)
app.get('/auth/signout', signout)
app.get('/auth/user_session', userSession)

//CARDS//
//If doing for allbanks
app.get('/api/cards/:bank', getCards)
app.post('/api/addcards', addCards)
app.put('/api/editcards/:id', updateCards)
app.delete('/api/deletecards/:id', deleteCards)
app.get('/api/points', combinePoints)

//will need bank name at cards TABLE , frontend



app.listen(SERVER_PORT, ()=>{
    console.log(`Server testing on port ${SERVER_PORT}`)
})