const {
    createEvent,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent


} = require('../controllers/eventController')
const express = require('express');
const router = express.Router();

//get all events
router.get('/', getEvents);

//get single event
router.get('/:id', getEvent);

//post a new event
router.post('/', createEvent);

//delete an event
router.delete('/:id', deleteEvent);

//update an event
router.patch('/:id', updateEvent);

module.exports = router;