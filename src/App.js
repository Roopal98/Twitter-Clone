import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import {Route, Routes} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Main from './components/Main';
import { useState } from 'react';
import Auth from './components/Auth';
function App() {
  // const [auth,setAuth] = useState(false)
  // const isAuthenticated = localStorage.getItem("isAuthenticated")?true:false;
  // setAuth(isAuthenticated)
  console.log('app.js')
  return (
    <div className="App">
      <Routes>
        <Route exact path='/signin' element={<Auth />}/>
        {/* <Route exact path='/' element={<ProtectedRoute user={user}><Home /></ProtectedRoute>} /> */}
        <Route path='/' element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          {/* <Route path="main" element={<Main />} /> */}
        </Route>
          


      </Routes>
    </div>
  );
}

export default App;
