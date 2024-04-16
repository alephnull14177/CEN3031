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
        case 'ADD_VOLUNTEER':
            //add one to volunteer count when add button is clicked
            
            const updatedEvents = state.events.map((e) => {
                if (e._id === action.payload._id) {
                    return { ...e, volunteers: e.volunteers + 1 }
                } 

                return e
                })
            return {
                ...state,
                events: updatedEvents
            }
        case 'REMOVE_VOLUNTEER':
            const Events = state.events.map((e) => {
                if (e._id === action.payload._id) {
                    return { ...e, volunteers: e.volunteers - 1 }
                } 

                return e
                })
            return {
                ...state,
                events: Events
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

