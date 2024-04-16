import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useEffect } from 'react'


// pages & components
import Home from './pages/Home'
import AdminHome from './pages/AdminHome'
import Login from './pages/Login'
import AdminSignup from './pages/AdminSignup'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Events from './pages/Events'

function App() {
  const { user } = useAuthContext()

  useEffect(() => {
    document.title = "Home | Downtown Volunteers"
  });

  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={(user && !user.isAdmin) ? <Home /> : <Navigate to="/login" />} 
            />
             <Route 
              path="/admin" 
              element={(user && user.isAdmin) ? <AdminHome /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : (user.isAdmin ? <Navigate to="/admin" /> : <Navigate to="/" />)} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
             <Route 
              path="/admin-signup" 
              element={!user ? <AdminSignup /> : <Navigate to="/admin" />} 
            />
            <Route
              path="/Events"
              element={user ? <Events /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
