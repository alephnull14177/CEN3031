import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

 
  

  return (
    <header>
      <div className="navbar">
        <Link to="/">
          {!user ? <h1>Barber Scheduler</h1> : <h1>Home</h1>}

        </Link>
        <nav>
        
          {user && (
            <div>
              
              <Link to="/Events" ><span><strong>Events</strong></span></Link>
            
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar