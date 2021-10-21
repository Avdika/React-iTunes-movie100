import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar';
import Search from './Components/Search';
import About from './Components/About';
import { ActualData } from './Context/index';

function App() {
  const [ActData, setActData] = useState(null);

  return (
    <BrowserRouter>
      <NavBar />
      <ActualData.Provider value={{ ActData, setActData }}>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/About" component={About} />
      </Switch>
      </ActualData.Provider>
    </BrowserRouter>
  )
}

export default App;
