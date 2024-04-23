import { useAuthContext } from "../hooks/useAuthContext"
import { useEventsContext } from "../hooks/useEventContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from "react"

const EventDetails = ({event})=>{
    const {user} = useAuthContext()
    const {dispatch} = useEventsContext()
    const [numVol, setNumVol] = useState(event.volunteers.length)
    const [isRSVPED, setIsRSVPED] = useState(event.volunteers.includes(user.email))

    useEffect(() => {
        // Get the count value from local storage when the component mounts
        const storedNumVol = localStorage.getItem('numVol');
        const storedIsRSVPED = localStorage.getItem('isRSVPED');
        if (storedNumVol && storedIsRSVPED) {
            setNumVol(numVol)
            setIsRSVPED(isRSVPED)
        }
      }, [numVol, isRSVPED]);

    useEffect(()=>{
        localStorage.setItem('numVol', numVol);
        localStorage.setItem('isRSVPED', isRSVPED);
    },[numVol, isRSVPED])

    console.log('START:', numVol)

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
        //console.log("token is ", user.token)
        const response = await fetch('/api/events/' + event._id + '/rsvp', {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: [user.email]}),
        
        })

        const json = await response.json()
        console.log('ADD:', numVol)

        if (response.ok){
            dispatch({type: 'RSVP_EVENT', payload: json})
            setIsRSVPED(true)
            setNumVol(numVol+1)
        }
    }

    const handleClickCancel = async() =>{
        
        
        const response = await fetch('/api/events/' + event._id + '/cancel', {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: [user.email]}),
        
        })

        const json = await response.json()
        console.log('DELETE:', numVol)

        if (response.ok){
            dispatch({type: 'CANCEL_RSVP', payload: json})
            setIsRSVPED(false)
            setNumVol(numVol-1)
        }
        
       
    }
    
    //console.log("is he in? ", event.volunteers.includes(user.token))
    
    return(
      
        <div className="event-details">
            <h4>{event.title}</h4>
            <p><strong>Date: </strong>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time: </strong>{event.time}</p>
            <p><strong>Description: </strong>{event.description}</p>
            <p><strong>Volunteers: </strong>{numVol}</p>
            <p>Posted {formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
            <br /> 
           {user.isAdmin && <span className = "material-symbols-outlined" onClick={handleClickDelete}>delete</span>}
           {(!user.isAdmin && !isRSVPED) && <span className="material-symbols-outlined" onClick={handleClickAdd}>add</span>}
           {(!user.isAdmin && isRSVPED) && <span className="material-symbols-outlined" onClick={handleClickCancel}>cancel</span>}

        </div>

    )
}

export default EventDetails

