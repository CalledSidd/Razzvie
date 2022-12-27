import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/user/Landing/Landing';
import Home from './pages/Home/Home';
import HomePage from './components/user/Home/Home';
import Product from './components/user/Product/Product';
import Messaging from './components/user/Messaging/Messaging';
import AddListing from './components/user/AddListing/AddListing';
import Profile from './components/user/Profile/Profile';
import Settings from './components/user/Settings/Settings';
import Notifications from './components/user/Notifications/Notifications';
import Wallet from './components/user/Wallet/Wallet';
import Login from './components/user/Login/Login';
import Signup from './components/user/Signup/Signup';
import EnterNo from './components/user/Otp/EnterNo';
import EnterOtp from './components/user/Otp/EnterOtp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/otp-phone' element={<EnterNo/>}/>
          <Route path='/otp-login' element={<EnterOtp/>}/>
          <Route path='' element={<Home/>}>
              <Route path='' element={<HomePage/>}/>
              <Route path='/product' element={<Product/>} />
              <Route path='/messaging' element={<Messaging/>} />
              <Route path='/notifications' element={<Notifications/>} />
              <Route path='/addlisting' element={<AddListing/>}  />
              <Route path='/wallet' element={<Wallet/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/settings' element={<Settings/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
