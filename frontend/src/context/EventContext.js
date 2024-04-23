import { createContext, useReducer } from "react";  
export const EventsContext = createContext();


export const eventsReducer = (state, action) => {
    switch(action.type){
        case 'SET_EVENTS':
            return{
                events: action.payload
        }
        case 'CREATE_EVENT':
            return{
                events: [action.payload, ...state.events]
        }
        
        case 'DELETE_EVENT':
            return{
                events: state.events.filter((e)=> e._id !== action.payload._id)
        }
        case 'RSVP_EVENT':
            //update the event state with the new volunteer so volunteers array is updated
            return{
                events: state.events.map((e)=>{
                    if(e._id === action.payload._id){
                        return action.payload
                    }
                    return e
                })
            
            }
        case 'CANCEL_RSVP':
            return{
                events: state.events.map((e)=>{
                    if(e._id === action.payload._id){
                        return action.payload
                    }
                    return e
                })

               
            
            }
            
              
        
        default:
            return state
    }
}

export const EventsContextProvider = ({children})=>{
    
    const [state, dispatch] = useReducer(eventsReducer, {
        events: null
    })
    

    return (
    <EventsContext.Provider value = {{...state, dispatch}}>
        {children}
    </EventsContext.Provider>
    )
}

