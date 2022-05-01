import React, {useState, useEffect} from 'react';
import '../styles/Map.css';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//|import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const locales = {
	'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const events = [
	{
		title: 'Reunión',
		allDay: true,
		start: new Date(2022, 3, 29),
		end: new Date(2022, 3, 29),
	},
	{
		title: 'Vacaciones',
		start: new Date(2022, 3, 7),
		end: new Date(2022, 3, 10),
	},
	{
		title: 'Conferencia',
		start: new Date(2022, 3, 20),
		end: new Date(2022, 3, 23),
	},
];

function Map() {
	const [newEvent, setNewEvent] = useState({
		title: '',
		start: '',
		end: '',
		events: [],
	});
	const [allEvents, setAllEvents] = useState(events);

	function handleAddEvent() {
		setAllEvents([...allEvents, newEvent]);
	}

	useEffect(() => {
		getEvent();
	});

	const getEvent = () => {
		axios
			.get('http://localhost:4000/proyecto_db')
			.then(response => {
				const data = response.data;
				this.setState({events: data});
				console.log('Data has been received');
			})
			.catch(() => {
				console.log('Error retreiving data');
			});
	};

	const submit = event => {
		event.preventDefault();

		const payload = {
			title: newEvent.title,
			start: newEvent.start,
			end: newEvent.end,
		};

		axios({
			url: 'http://localhost:4000/proyecto_db',
			method: 'POST',
			data: payload,
		})
			.then(() => {
				console.log('Data has been sent to the server');
				resetUserInputs();
			})
			.catch(() => {
				console.log('Internal server error');
			});
	};

	const resetUserInputs = () => {
		setNewEvent({
			title: '',
			start: '',
			end: '',
		});
	};

	const displayEvent = events => {
		if (!events.length) return null;

		return events.map((event, index) => (
			<div key={index} className="event__display">
				<h3>{event.title}</h3>
				<h3>{event.start}</h3>
				<h3>{event.end}</h3>
			</div>
		));
	};

	return (
		<div className="map">
			<h1>Calendario de Eventos</h1>
			<h2>Agregar nuevo evento</h2>
			<form onSubmit={submit}>
				<div>
					<input
						type="text"
						placeholder="Título"
						style={{width: '20%', marginRight: '10px'}}
						value={newEvent.title}
						onChange={e => setNewEvent({...newEvent, title: e.target.value})}
					/>
					<input
						type="text"
						placeholder="Inicio"
						style={{marginRight: '10px'}}
						value={newEvent.start}
						onChange={start => setNewEvent({...newEvent, start: start.target.value})}
					/>
					<input
						type="text"
						placeholder="Fin"
						value={newEvent.end}
						onChange={end => setNewEvent({...newEvent, end: end.target.value})}
					/>
					{/* <input
					type="text"
					placeholder="Descripción"
					value={newEvent.description}
					onChange={description => setNewEvent({...newEvent, end: description.target.value})}
				/>
				<input
					type="text"
					placeholder="url"
					value={newEvent.url}
					onChange={url => setNewEvent({...newEvent, end: url.target.value})}
				/> */}
					<button stlye={{marginTop: '10px'}} onClick={handleAddEvent}>
						Add Event
					</button>
				</div>
			</form>
			<Calendar
				localizer={localizer}
				events={allEvents}
				startAccessor="start"
				endAccessor="end"
				style={{height: 500, margin: '50px'}}
			/>
		</div>
	);
}

export default Map;
