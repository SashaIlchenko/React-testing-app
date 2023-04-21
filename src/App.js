
import './App.css';
import { lazy } from "react";
import Layout from './Components/Layout/Layout';
import { Route, Routes } from "react-router-dom";
// import { getUsers } from './API';
// import { useEffect } from 'react';
const Home = lazy(() => import('./Pages/Home/Home'));
const Tweets = lazy(() => import('./Pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}


