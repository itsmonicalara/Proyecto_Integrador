const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const spiderRoutes = express.Router();

const PORT = 4000;

let Spider = require('./spider.model');
let Event = require('./event.model');

app.use(cors());
app.use(bodyParser.json());
// Name of database: proyecto_db
mongoose.connect('mongodb://127.0.0.1:27017/proyecto_db', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Add a spider to the database
spiderRoutes.route('/add_spider').post(function(req, res) {
    let spider = new Spider(req.body);
    spider.save()
        .then(spider => {
            res.status(200).json({'Status': 'Spider added successfully'});
        })
        .catch(err => {
            res.status(400).send('Status: Adding new spider failed');
        });
});

// Add a event to the database
spiderRoutes.route('/add_event').post(function(req, res) {
    let event = new Event(req.body);
    event.save()
        .then(event => {
            res.status(200).json({'Status': 'Event added successfully'});
        })
        .catch(err => {
            res.status(400).send('Status: Adding new Event failed');
        });
});


// Retrieve all the spiders in the database
spiderRoutes.route('/get_spiders').get(function(req, res) {
    Spider.find(function(err, proyecto_db) {
        if (err) {
            console.log(err);
        } else {
            res.json(proyecto_db);
        }
    });
});

// Retrieve all the events in the database
spiderRoutes.route('/get_event').get(function(req, res) {
    Event.find(function(err, proyecto_db) {
        if (err) {
            console.log(err);
        } else {
            res.json(proyecto_db);
        }
    });
});


// Get a single spider by id
spiderRoutes.route('/spider/:id').get(function(req, res) {
    let id = req.params.id;
    Spider.findById(id, function(err, spider) {
        res.json(spider);
    });
});

// Get a single event by id
spiderRoutes.route('/event/:id').get(function(req, res) {
    let id = req.params.id;
    Event.findById(id, function(err, event) {
        res.json(event);
    });
});



// Update a spider by id
spiderRoutes.route('/spider/update/:id').post(function(req, res) {
    Spider.findById(req.params.id, function(err, spider) {
        if (!spider)
            res.status(404).send("Data is not found");
        else
            spider.name = req.body.name;
            spider.description = req.body.description;
            spider.danger = req.body.danger;
            spider.url = req.body.url;
            spider.species = req.body.species;
            spider.family = req.body.family;
            spider.scientificName = req.body.scientificName;
            spider.save().then(spider => {
                res.json('Spider updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


// Update a event by id
spiderRoutes.route('/event/update/:id').post(function(req, res) {
    Event.findById(req.params.id, function(err, event) {
        if (!event)
            res.status(404).send("Data is not found");
        else
            event.name = req.body.name;
            event.description = req.body.description;
            event.date = req.body.date;
            event.time = req.body.time;
            event.adress = req.body.adress;
            event.save().then(event => {
                res.json('Event updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// Erase a spider by id
spiderRoutes.route('/spider/delete/:id').get(function(req, res) {
    Spider.findByIdAndRemove({_id: req.params.id}, function(err, spider) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

// Erase a spider by id
spiderRoutes.route('/event/delete/:id').get(function(req, res) {
    Event.findByIdAndRemove({_id: req.params.id}, function(err, event) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});


app.use('/proyecto_db', spiderRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});