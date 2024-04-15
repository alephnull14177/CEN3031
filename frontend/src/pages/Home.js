
import { useEffect } from "react"



const Home = () => {
  useEffect(() => {
    document.title = "Home | Downtown Volunteers"
  },[]);
  return (
    <div className="home">
      <h2>About Us</h2>

      <div className="about">
        
      <p>
            Inspired by the Project Downtown Gainesville Nonprofit Organization,
            we desire to provide a platform for 
            volunteers to help those in need. With this platform 
            users will be able to easily find volunteer opportunities
            and sign up for them. 
          </p>
        

      </div>
      <h2>Our Mission</h2>
      <div className="mission">
      <p>Project Downtown Gainesville wants to 
          spread the message of hope and compassion. 
          We believe that a single action can make a 
          difference in the community, and that 
          collective action can greatly impact the 
          world. Through advocacy and outreach 
          activities, our team works tirelessly each 
          day to contribute their part to the greater
           good.
           <br />
           <br />
           
           <a href='https://www.pdgainesville.com/' target="_blank" rel="noopener noreferrer">Project Downtown Gainesville</a>
        </p>
      </div>
      <div className='DowntownLink'>
        </div>
    </div>
  )
}

export default Home