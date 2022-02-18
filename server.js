require('dotenv').config()
console.log(process.env.MONGO_URI)
const express = require('express'); // lets you run express
const mongoose = require('mongoose') // lest you run mongoose
const app = express(); // calls express to work 
const Fruit = require('./models/fruits'); // imports fruits from wherever it is 
const Veggie = require('./models/vegetables'); // imports vegetables from wherever it is


// MVC Setup

//views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Middelware
app.use(express.urlencoded({ extended: true })) // allows code below to work (req.body)
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

// Index week10day3 changed on week1day2
app.get('/fruits', (req, res) => {
    Fruit.find({}, (err, foundFruits) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('fruits/Index', {
                fruits: foundFruits
            })
        }
    })

});
app.get('/vegetables', (req, res) => {
    Veggie.find({}, (err, foundVegetables) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('vegetables/Index', {
                vegetables: foundVegetables
            })
        }
    })

});

// New week11day1
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})


// Delete

//Update

//Create week11day1 updated on week11day2

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    Fruit.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdFruit)
            res.redirect('/fruits')
        }
    })

})
app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    Veggie.create(req.body, (err, createdVeggie) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdVeggie)
            res.redirect('/vegetables')
        }
    })

})

//Edit

//Show week10day3 updated week11day2

app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('fruits/Show', {
                fruit: foundFruit
            })
        }
    })
})
app.get('/vegetables/:id', (req, res) => {
    Veggie.findById(req.params.id, (err, foundVeggie) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('vegetables/Show', {
                veggie: foundVeggie
            })
        }
    })
})


app.listen(3000, () => {
    console.log('Im still listening')
})