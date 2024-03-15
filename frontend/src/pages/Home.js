
import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {
  const {user} = useAuthContext()

  return (
    <div className="home">
      <p>Hello</p>
    </div>
  )
}

export default Home