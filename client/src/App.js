import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Test from './pages/Test';
import Gifs from './pages/Gifs';


const App = () => {
  return (
    <div>
    <Router>
    <Home />
      <Switch>
        <Route path='/list' exact component={List}/>
        <Route path='/express/test' exact component={Test} />
        <Route path='/express/gifs' exact component={Gifs} />
      </Switch>
    </Router>
    </div>
  )
}
export default App;
