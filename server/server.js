const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const spiderRoutes = express.Router();
const eventRoutes = express.Router();

const PORT = 4000;

// La forma en que se llama el esquema
let Spider = require('./spider.model');
let Event = require('./event.model');

app.use(cors());
app.use(bodyParser.json());
// Name of database: proyecto_db
mongoose.connect('mongodb://127.0.0.1:27017/proyecto_db', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', function () {
	console.log('MongoDB database connection established successfully');
});

// Hacer algo similar para calendario usar, probar con la misma ruta o crear mi propia ruta "add-calendar"
// Add a spider to the database
spiderRoutes.route('/add').post(function (req, res) {
	let spider = new Spider(req.body);
	spider
		.save()
		.then(spider => {
			res.status(200).json({Status: 'Spider added successfully'});
		})
		.catch(err => {
			res.status(400).send('Status: Adding new spider failed');
		});
});

eventRoutes.route('/add-event').post(function (req, res) {
	let event = new Event(req.body);
	event
		.save()
		.then(event => {
			res.status(200).json({Status: 'Event added successfully'});
		})
		.catch(err => {
			res.status(400).send('Status: Adding new event failed');
		});
});

// Retrieve all the spiders in the database
spiderRoutes.route('/').get(function (req, res) {
	Spider.find(function (err, proyecto_db) {
		if (err) {
			console.log(err);
		} else {
			res.json(proyecto_db);
		}
	});
});

// Retrieve all the events in the database
// eventRoutes.route('/get-events').get(function (req, res) {
// 	Event.find(function (err, proyecto_db) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(proyecto_db);
// 		}
// 	});
// });

// Get a single spider by id
spiderRoutes.route('/:id').get(function (req, res) {
	let id = req.params.id;
	Spider.findById(id, function (err, spider) {
		res.json(spider);
	});
});

// Update a spider by id
spiderRoutes.route('/update/:id').post(function (req, res) {
	Spider.findById(req.params.id, function (err, spider) {
		if (!spider) res.status(404).send('data is not found');
		else spider.name = req.body.name;
		spider.description = req.body.description;
		spider.danger = req.body.danger;
		spider.url = req.body.url;
		spider.info.species = req.body.info.species;
		spider.info.family = req.body.info.family;
		spider.info.filo = req.body.info.filo;
		spider.info.scientificName = req.body.info.scientificName;
		spider
			.save()
			.then(spider => {
				res.json('Spider updated!');
			})
			.catch(err => {
				res.status(400).send('Update not possible');
			});
	});
});

app.use('/proyecto_db', spiderRoutes);
app.use('/proyecto_db', eventRoutes);

app.listen(PORT, function () {
	console.log('Server is running on Port: ' + PORT);
});
