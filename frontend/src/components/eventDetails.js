import { useAuthContext } from "../hooks/useAuthContext"
import { useEventsContext } from "../hooks/useEventContext"

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
        <div className="event-details">
            <h4>{event.title}</h4>
            <p><strong>Date: </strong>{event.date}</p>
            <p><strong>Description: </strong>{event.description}</p>
            <p>{event.createdAt}</p>
           {user.isAdmin && <span onClick={handleClick}>delete</span>}
        </div>
    )
}

export default EventDetails