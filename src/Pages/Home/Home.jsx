import React from "react";
import logo from '../../images/logo512.png'
import { HomePage, Title, MainLogo } from "./Home.styled";

const Home = () => {
    return <HomePage><Title className="title">Hello! Welcome to your tweets!</Title>
        <MainLogo className='mainImg' src={logo} alt='logo' /></HomePage>
}

export default Home;