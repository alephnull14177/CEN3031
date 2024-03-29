import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Events = () => {
  // const {workouts, dispatch} = useWorkoutsContext()
  const { user } = useAuthContext();

  useEffect(() => {
    document.title = "Events | Downtown Volunteers";

    // const fetchWorkouts = async () => {
    //   const response = await fetch('/api/workouts', {
    //     headers: {'Authorization': `Bearer ${user.token}`},
    //   })
    //   const json = await response.json()

    //   if (response.ok) {
    //     dispatch({type: 'SET_WORKOUTS', payload: json})
    //   }
    // }

    // if (user) {
    //   fetchWorkouts()
    // }

  });//, [dispatch, user]);

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        <div className="event">
          <h3>Event Title 1</h3>
          <p>Date: March 30, 2024</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="event">
          <h3>Event Title 2</h3>
          <p>Date: April 5, 2024</p>
          <p>Description: Nulla facilisi. Phasellus fermentum ex ac lectus fermentum, vel.</p>
        </div>
        {/* Add more events as needed */}
      </div>
      {/* <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />  */}
    </div>
  );
}

export default Events;