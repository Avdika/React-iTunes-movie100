import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar';
import MainPage from './Components/MainPage';
import About from './Components/About';
import { ActualData } from './Context/index';

function App() {
  const [actData, setActData] = useState([]);

  return (
    <BrowserRouter>
      <NavBar />
      <ActualData.Provider value={{ actData, setActData }}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/About" component={About} />
      </Switch>
      </ActualData.Provider>
    </BrowserRouter>
  )
}

export default App;
