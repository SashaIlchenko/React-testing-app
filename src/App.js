
import './App.css';
import { lazy } from "react";
import Layout from './Components/Layout/Layout';
import { Route, Routes, Navigate } from "react-router-dom";
const Home = lazy(() => import('./Pages/Home/Home'));
const Tweets = lazy(() => import('./Pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  );
}


