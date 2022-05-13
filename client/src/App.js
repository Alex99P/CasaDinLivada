import React from "react";
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
import Userdashboard from "./components/Dashboard/Userdashboard";
import Admindashboard from "./components/Dashboard/Admindashboard";


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/myprofile" element={<Userdashboard />} exact />
        <Route path="/admin" element={<Admindashboard />} exact />
        <Route path="/auth" element={<Auth />} exact />
        <Route path="/ritualul" element={<Ritualul />} exact />
        <Route path="/rezervare" element={<Rezervare />} exact />
        <Route path="/cazare" element={<Cazare />} exact />
        <Route path="/relaxare" element={<Relaxare />} exact />
        <Route path="/tarife" element={<Tarife />} exact />
        <Route path="/intrebari-frecvente" element={<Intrebari />} exact />
        <Route path="/despre-noi" element={<DespreNoi />} exact />
        <Route path="/locatie" element={<Locatie />} exact />
        <Route path="/galerie-foto" element={<Foto />} exact />
      </Routes>
    </React.Fragment>
  );
}

export default App;
