import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { useEffect } from "react"

const Signup = () => {
    useEffect(() => {
        document.title = "Signup | Downtown Volunteers"
    }, []);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div className="signup">
            <form className="signup-barber" onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzwk1Z25v1Xw1Ws6h2QXfGQoaMDDnUOijJLLDk94xFw&s" alt="Logo"
                  className="logo" />
              </div>
              <h3 data-testid='signup-test' style={{ textAlign: 'center', marginTop: '15px', marginBottom: '5px' }}>Sign Up</h3>
                <label>Email Address:  </label>
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
                <button className="signup-button" disabled={isLoading} data-testid='button-test1'>Sign Up</button>
                {error && <div className="error" data-testid='error'>{error}</div>}
            </form>
            <a href="/admin-signup">
                <button className="admin-signup-button">
                    Admin Signup
                </button>
            </a>
        </div>
    )
}

export default Signup
