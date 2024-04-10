const Event = require('../models/eventModel')
const mongoose = require('mongoose')

//getting all events
const getEvents = async(req,res)=>{
    const events = await Event.find({}).sort({createdAt: +1})
    res.status(200).json(events)
}

//getting a single event
const getEvent = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'})
    }

    const event = await Event.findById(id)

    if(!event){
        return res.status(404).json({error:'No such event'})
    }

    res.status(200).json(event)
}

//creating a new event
const createEvent = async(req, res)=>{
    const{title, date, description} = req.body;

    //add event to db
    try{
        const event = await Event.create({title, date, description})
        res.status(200).json(event)
    } catch(error){
        res.status(400).json({error: error.message})
        
    }


}

//deleting an event
const deleteEvent = async(req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'})
    }

    const event = await Event.findOneAndDelete({_id:id})

    if(!event){
        return res.status(404).json({error:'No such event'})
    }

    res.status(200).json(event)

}

//updating an event
const updateEvent = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'})
    }

    const event = await Event.findByIdAndUpdate({_id:id,},{
        ...req.body
    })

    if(!event){
        return res.status(404).json({error:'No such event'})
    }
    res.status(200).json(event)
}

module.exports = {
    createEvent,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent
}