import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cazare from "./components/Cazare/Cazare";
import Home from "./components/Home/Home";
import Relaxare from "./components/Relaxare/Relaxare";
import Ritualul from "./components/Ritualul/Ritualul";
import Tarife from "./components/Tarife/Tarife";
import Locatie from "./components/Locatie/Locatie";
import Intrebari from "./components/IntrebariFrecvente/Intrebari";
import DespreNoi from "./components/DespreNoi/DespreNoi";
import Foto from "./components/GalerieFoto/Foto";
import Rezervare from "./components/Rezervare/Rezervare"
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import ReactGA from 'react-ga4';


function App() {
  ReactGA.initialize("G-D036LHWL8X");
// ReactGA.send(window.location.pathname + window.location.search);
// ReactGA.send({ hitType: "pageview", page: "/my-path" });

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/myprofile" element={<Dashboard />} exact />
        <Route path="/auth" element={<Auth />} exact />
        <Route path="/ritual" element={<Ritualul />} exact />
        <Route path="/reservation" element={<Rezervare />} exact />
        <Route path="/housing" element={<Cazare />} exact />
        <Route path="/relaxation" element={<Relaxare />} exact />
        <Route path="/prices" element={<Tarife />} exact />
        <Route path="/frequent-questions" element={<Intrebari />} exact />
        <Route path="/contact" element={<DespreNoi />} exact />
        {/* <Route path="/location" element={<Locatie />} exact /> */}
        <Route path="/photos" element={<Foto />} exact />
      </Routes>
    </React.Fragment>
  );
}

export default App;
