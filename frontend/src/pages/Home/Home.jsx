import React from "react";
import { Outlet } from "react-router-dom";
import './Home.css';
import Nav from "../../components/user/Navbar/Navbar";
import Sidebar from "../../components/user/Sidebar/Sidebar";


const Home = () => {
  return (
    <div>
        <Nav/>
        <Sidebar/>
        <Outlet/>

    </div>
  )
}

export default Home