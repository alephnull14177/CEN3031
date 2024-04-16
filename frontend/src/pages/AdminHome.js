
import { useEffect } from "react"



const AdminHome = () => {
  useEffect(() => {
    document.title = "Admin | Downtown Volunteers"
  },[]);
  return (
    <div className="home">
      <h2>About Us - Admin Page</h2>

      <body className="about">
        
      <p>
            Inspired by the Project Downtown Gainesville Nonprofit Organization,
            we desire to provide a platform for 
            volunteers to help those in need. With this platform 
            users will be able to easily find volunteer opportunities
            and sign up for them. 
          </p>
        

      </body>
      <h2>Our Mission</h2>
      <body className="mission">
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
      </body>
      <div className='DowntownLink'>
        </div>
    </div>
  )
}


export default AdminHome