import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { useEffect } from "react"
const Signup = () => {
  useEffect(() => {
    document.title = "Signup | Downtown Volunteers"
  },[]);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className="signup">
    <form className="signup-barber" onSubmit={handleSubmit}>
      <h3 data-testid='signup-test'>Sign Up</h3>
      
      <label>Email address:</label>
      <input 
        data-testid='emailTest'
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <br />
      <br />
      <label>Password:</label>
      <input 
        data-testid='passTest'
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <br />
      <br />
      <button disabled={isLoading} data-testid='button-test1'>Sign Up</button>
      {error && <div className="error" data-testid='error'>{error}</div>}
    </form>
     <a href="/admin-signup">
      <button>
        Admin Signup
      </button>
     </a>
    </div>
  )
}

export default Signup