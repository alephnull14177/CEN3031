import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useEffect } from "react"

const Login = () => {
    useEffect(() => {
        document.title = "Login | Downtown Volunteers"
    }, []);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="login">
            <div className="title">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzwk1Z25v1Xw1Ws6h2QXfGQoaMDDnUOijJLLDk94xFw&s" alt="Logo"
            className="logo" />
                <h3 data-testid='login-test'>Log In</h3>
            </div>
            <form className="login-barber" onSubmit={handleSubmit}>
            <label> Email Address:  </label>
                <input
                    data-testid='emailTest2'
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <br />
                <label>Password: </label>
                <input
                    data-testid='passTest2'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br />
                <br />
                <button className="login-button" disabled={isLoading} data-testid='button-test2'>Log In</button>
                {error && <div className="error" data-testid='error2'>{error}</div>}
            </form>
        </div>
    )
}

export default Login
