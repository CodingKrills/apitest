const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const port = 5000

// connecting to mongoDB with mongoURI
mongoose
    .connect(
        'mongodb+srv://MyUsername:MyPassword@mycluster-rkncu.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routes
app.use('/api', require('./routes/index.js'));

//redirect
app.get('*', (req,res,next)=> {
    res.redirect('/api')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
