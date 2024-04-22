const {
    createEvent,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent,
    rsvpEvent,
    cancelRsvp


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
//router.patch('/:id/admin', updateEvent);

router.patch('/:id/rsvp',rsvpEvent )

router.patch('/:id/cancel', cancelRsvp)

module.exports = router;