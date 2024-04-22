import { useAuthContext } from "../hooks/useAuthContext"
import { useEventsContext } from "../hooks/useEventContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from "react"




const EventDetails = ({event})=>{
    const {user} = useAuthContext()
    const {dispatch} = useEventsContext()
    
    const [isRSVPED, setIsRSVPED] = useState(false)
    
    useEffect(()=>{
        setIsRSVPED(event.volunteers.includes(user._id))
    },[event.volunteers, user._id])




    


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
        const response = await fetch('/api/events/' + event._id + '/rsvp', {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: user._id}),
        
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type: 'RSVP_EVENT', payload: json})
            setIsRSVPED(true)
        }
    }

    const handleClickCancel = async() =>{
        const response = await fetch('/api/events/' + event._id + '/cancel', {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: user._id}),
        
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type: 'CANCEL_RSVP', payload: json})
            setIsRSVPED(false)
        }
    }
    
    
    return(
      
        <div className="event-details">
            <h4>{event.title}</h4>
            <p><strong>Date: </strong>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time: </strong>{event.time}</p>
            <p><strong>Description: </strong>{event.description}</p>
            <p><strong>Volunteers: </strong>{event.volunteers.length}</p>
            <p>Posted {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
            <br /> 
           {user.isAdmin && <span className = "material-symbols-outlined" onClick={handleClickDelete}>delete</span>}
           {(!user.isAdmin && !isRSVPED) && <span className="material-symbols-outlined" onClick={handleClickAdd}>add</span>}
           {(!user.isAdmin && isRSVPED) && <span className="material-symbols-outlined" onClick={handleClickCancel}>cancel</span>}

        </div>

    )
}

export default EventDetails

