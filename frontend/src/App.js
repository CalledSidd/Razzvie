import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home/Home';
import HomePage from './components/user/Home/Home';
import Messaging from './components/user/Messaging/Messaging';
import Settings from './components/user/Settings/Settings';
import Login from './components/user/Login/Login';
import Signup from './components/user/Signup/Signup';
import EnterNo from './components/user/Otp/EnterNo';
import EnterOtp from './components/user/Otp/EnterOtp';
import Post from './components/user/Post/Post';
import Explore from './components/user/Explore/Explore';
import { AuthProvider } from './context/AuthContext';
import UserPosts from './components/user/Profile/UserPosts';
import Following from './components/user/Profile/Following';
import Followers from './components/user/Profile/Followers';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/otp-phone' element={<EnterNo/>}/>
          <Route path='/otp-login' element={<EnterOtp/>}/>
          <Route path='' element={<Home/>}>
              <Route path='' element={<HomePage/>}/>
              <Route path='/post/:post_id' element={<Post/>} />
              <Route path='/messaging' element={<Messaging/>} />
              <Route path='/wallet' element={<Explore/>} />
              <Route path='/profile' element={<UserPosts/>}/>
              <Route path='/followers' element={<Following/>}/>
              <Route path='/following' element={<Followers/>}/>
              <Route path='/settings' element={<Settings/>} />
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
