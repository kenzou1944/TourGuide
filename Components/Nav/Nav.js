import React from 'react';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About';
// import Messages from '../Messages';
import TourBuilder from '../../containers/TourBuilder/TourBuilder';
import classes from './Nav.css';

const nav = () =>{
	return(
	<div >
			  <ul>
              <li> <Link to="/tour">Tour</Link> </li>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/about">About</Link> </li>
        </ul>
          <Switch>
            <Route exact path="/tour"  component={TourBuilder} />
            <Route exact path="/"  component={Home} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
    </div>
	);
}

export default nav;