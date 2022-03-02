require('dotenv').config();
console.log(process.env.MONGO_URI)
const express = require('express'); // lets you run express
const mongoose = require('mongoose') // lest you run mongoose
const methodOverride = require('method-override');
const app = express(); // calls express to work 
const Fruit = require('./models/fruits'); // imports fruits from wherever it is 
const Veggie = require('./models/vegetables'); // imports vegetables from wherever it is


// MVC Setup

//VIEWS
app.set('view engine', 'jsx');
//```javascript//tells express to try to match requests with files in the directory called 'public'```
app.use(express.static('public'));
app.engine('jsx', require('express-react-views').createEngine());
//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//MIDDELWARE
app.use(express.urlencoded({ extended: true })) // User sends request, Middleware runs between controller and callback functions
app.use((req, res, next) => {
    console.log(req.body)
    next()
})
app.use(methodOverride('_method'))

// INDEX week10day3 changed on week 1 day 2
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

// NEW week11day1
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})


// DELETE updated on week 12 day 2
app.delete('/fruits/:id', (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
        if(!err){
            res.redirect('/fruits')
        } else {
            res.status(400).send(err)
        }
    })
})

//UPDATE  week 12 day 2
app.put('/fruits/:id', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }else {
        req.body.readyToEat = false;
    }

    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/fruits/${req.params.id}`)
        }
    })
})




//CREATE week11day1 updated on week 11 day 2

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

//EDIT updated week 12 day 2
app.get('/fruits/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('fruits/Edit', {
                fruit: foundFruit
            })
        }
    })
})

//SHOW week10day3 updated week11day2

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