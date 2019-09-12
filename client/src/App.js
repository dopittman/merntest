import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List'


function App() {
  const App = () => (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/list' component={List}/>
      </Switch>
    </div>
  )
  return (
    <Switch>
      <App/>
    </Switch>
  );
}

export default App;
