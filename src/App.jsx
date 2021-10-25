import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar';
import MainPage from './Components/MainPage';
import About from './Components/About';
import ActualDataProvider from './Context/index';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <ActualDataProvider>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/About" component={About} />
      </Switch>
      </ActualDataProvider>
    </BrowserRouter>
  )
}

export default App;
