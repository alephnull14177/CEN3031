import { useState } from "react"
import { useAdminSignup } from "../hooks/useAdminSignup"
import { useEffect } from "react"
const Signup = () => {
  useEffect(() => {
    document.title = "Signup | Downtown Volunteers"
  },[]);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secret, setSecret] = useState('')
  const {adminSignup, error, isLoading} = useAdminSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await adminSignup(email, password, secret)
  }

  return (
    <form className="signup-admin" onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzwk1Z25v1Xw1Ws6h2QXfGQoaMDDnUOijJLLDk94xFw&s" alt="Logo"
                  className="logo" />
              </div>
              <h3 data-testid='signup-test' style={{ textAlign: 'center', marginTop: '15px', marginBottom: '5px' }}>Sign Up</h3>
      <h3 data-testid='signup-test'>  </h3>
      
      <label>Email address:  </label>
      <input 
        data-testid='emailTest'
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <br />
      <br />
      <label>Password:  </label>
      <input 
        data-testid='passTest'
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <br />
      <br />
      <label>Secret:  </label>
      <input 
        data-testid='secretTest'
        type="secret" 
        onChange={(e) => setSecret(e.target.value)} 
        value={secret} 
      />
      <br />
      <br />
      <button disabled={isLoading} data-testid='button-test1'>Sign Up</button>
      {error && <div className="error" data-testid='error'>{error}</div>}
    </form>
  )
}

export default Signup