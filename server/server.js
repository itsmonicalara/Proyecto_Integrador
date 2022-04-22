const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const spiderRoutes = express.Router();

const PORT = 4000;

let Spider = require('./spider.model');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/spiders', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Add a spider to the database
spiderRoutes.route('/add').post(function(req, res) {
    let spider = new Spider(req.body);
    spider.save()
        .then(spider => {
            res.status(200).json({'Status': 'Spider added successfully'});
        })
        .catch(err => {
            res.status(400).send('Status: Adding new spider failed');
        });
});

// Retrieve all the spiders in the database
spiderRoutes.route('/').get(function(req, res) {
    Spider.find(function(err, spiders) {
        if (err) {
            console.log(err);
        } else {
            res.json(spiders);
        }
    });
});

// Get a single spider by id
spiderRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Spider.findById(id, function(err, spider) {
        res.json(spider);
    });
});

// Update a spider by id
spiderRoutes.route('/update/:id').post(function(req, res) {
    Spider.findById(req.params.id, function(err, spider) {
        if (!spider)
            res.status(404).send("data is not found");
        else
            spider.name = req.body.name;
            spider.description = req.body.description;
            spider.danger = req.body.danger;
            spider.url = req.body.url;
            spider.info.species = req.body.info.species;
            spider.info.family = req.body.info.family;
            spider.info.filo = req.body.info.filo;
            spider.info.scientificName = req.body.info.scientificName;
            spider.save().then(spider => {
                res.json('Spider updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/spiders', spiderRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});