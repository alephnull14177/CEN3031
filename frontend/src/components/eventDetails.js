import { useAuthContext } from "../hooks/useAuthContext"
import { useEventsContext } from "../hooks/useEventContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const EventDetails = ({event})=>{
    
    const {user} = useAuthContext()
    const {dispatch} = useEventsContext()

    const handleClick = async()=>{
        const response = await fetch('/api/events/' + event._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE_EVENT', payload: json})
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
            <p>{formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
            {user.isAdmin && <span className="material-symbols-outlined" onClick={handleClick}>delete</span>}
        </div>

    )
}

export default EventDetails

