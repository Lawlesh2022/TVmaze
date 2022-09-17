import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'

import Navbar from './components/Navbar'

import Showpage from './pages/Showpage'
import Actorpage from './pages/Actorpage'
import Singlepage from './pages/Singlepage'

const App = ()=> {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className = "container">      
         <Routes>
          <Route exact path = '/' element = {<Showpage/>} />
          <Route path = '/actor' element = {<Actorpage/>} />
          <Route path = '/singleShow/:id' element = {<Singlepage/>} />
         </Routes>         
      </div>
    </BrowserRouter>
  );
}

export default App;
