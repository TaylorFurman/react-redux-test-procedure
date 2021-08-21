import { Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

//components
import NavBar from './components/NavBar.jsx';
import LeaderBoard from './components/LeaderBoard.jsx'


//redux
import store from './redux/store.js';


import React from 'react';
import './App.css';


//used incase no url is found
const NoMatch = ({location}) => (
  <div>
    <h3>Page not Found: {location.pathname}</h3>
  </div>
)


function App() {
  return (
    <div className="App">
     <Provider store={store}>
        <Switch>
          <Route exact path='/'><NavBar/></Route>

          <Route path='/customtest'><NavBar/><LeaderBoard/></Route>
          
          <Route component={NoMatch}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
