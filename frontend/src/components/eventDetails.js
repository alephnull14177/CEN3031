import { useAuthContext } from "../hooks/useAuthContext"
import { useEventsContext } from "../hooks/useEventContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from "react"




const EventDetails = ({event})=>{
    const {user} = useAuthContext()
    const {dispatch} = useEventsContext()
    const [isClicked, setIsClicked] = useState(false)


    


    const handleClickDelete = async()=>{
        const response = await fetch('/api/events/' + event._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE_EVENT', payload: json})
        }
    }
    
    const handleClickAdd = async() =>{
        const response = await fetch('/api/events/' + event._id, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({volunteers: event.volunteers + 1}),
        
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type: 'ADD_VOLUNTEER', payload: json})
            setIsClicked(true)
        }
    }

    const handleClickCancel = async() =>{
        const response = await fetch('/api/events/' + event._id, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({volunteers: event.volunteers - 1}),
        
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type: 'REMOVE_VOLUNTEER', payload: json})
            setIsClicked(false)
        }
    }
    
    
    return(
        // <div className="event-details">
        //     <h4>{event.title}</h4>
        //     <p><strong>Date: </strong>{event.date}</p>
        //     <p><strong>Time: </strong>{event.time}</p>
        //     <p><strong>Description: </strong>{event.description}</p>
        //     <p>{formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
        //    {user.isAdmin && <span className="material-symbols-outlined" onClick={handleClick}>delete</span>}
        // </div>
        <div className="event-details">
            <h4>{event.title}</h4>
            <p><strong>Date: </strong>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time: </strong>{event.time}</p>
            <p><strong>Description: </strong>{event.description}</p>
            <p><strong>Volunteers: </strong>{event.volunteers}</p>
            <p>Posted {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
            <br /> 
           {user.isAdmin && <span className = "material-symbols-outlined" onClick={handleClickDelete}>delete</span>}
           {(!user.isAdmin && !isClicked) && <span className="material-symbols-outlined" onClick={handleClickAdd}>add</span>}
           {(!user.isAdmin && isClicked) && <span className="material-symbols-outlined" onClick={handleClickCancel}>cancel</span>}

        </div>

    )
}

export default EventDetails

