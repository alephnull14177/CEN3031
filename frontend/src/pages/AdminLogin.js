import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useEffect } from "react"
const Login = () => {
  useEffect(() => {
    document.title = "Login | Downtown Volunteers"
  });

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }
  
  return (
    <form className="login-admin" onSubmit={handleSubmit}>
      <h3 data-testid='login-test'>Log In</h3>
      
      <label>Email address:</label>
      <input 
        data-testid='emailTest2'
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <br />
      <br />
      <label>Password:</label>
      <input 
        data-testid='passTest2'
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <br />
      <br />
      <button disabled={isLoading} data-testid='button-test2'>Log In</button>
      {error && <div className="error" data-testid='error2'>{error}</div>}
    </form>
  )
  
}

export default Login