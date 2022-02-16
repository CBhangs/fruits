const express = require('express');
const app = express();
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Middelware
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

// Index week10day3
app.get('/fruits', (req, res) => {
    res.render('fruits/Index', { fruits })
});
app.get('/vegetables', (req, res) => {
    res.render('vegetables/Index', { vegetables })
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

//Create week11day1

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
})
app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    vegetables.push(req.body);
    res.redirect('/vegetables');
})

//Edit

//Show week10day3

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('fruits/Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    })
})
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('vegetables/Show', {
        veggie: vegetables[req.params.indexOfVegetablesArray]
    })
})


app.listen(3000, () => {
    console.log('Im still listening')
})