import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Cazare from './components/Cazare/Cazare';
import Home from './components/Home/Home';
import Relaxare from './components/Relaxare/Relaxare';
import Ritualul from './components/Ritualul/Ritualul';
import Tarife from './components/Tarife/Tarife';

function App() {
  return (
    <React.Fragment>
   <Routes>
     <Route path='/' element={<Home />} exact/>
     <Route path='/ritualul' element={<Ritualul />} exact/>
     <Route path='/cazare' element={<Cazare />} exact/>
     <Route path='/relaxare' element={<Relaxare />} exact/>
     <Route path='/tarife' element={<Tarife />} exact/>

  
   </Routes>
   </React.Fragment>

  );
}

export default App;
