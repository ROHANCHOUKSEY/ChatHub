import React, { useContext } from 'react'
import './style.css';
import Register from './pages/Register'
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App () {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children;
  }

  return (
   <BrowserRouter>
     <Routes>
        <Route path="/">
            <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            }/>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />} />
        </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App


