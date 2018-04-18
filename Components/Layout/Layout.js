import React from 'react';

import classes from './Layout.css';

import Nav from '../Nav/Nav';
const layout = ( props ) => (
    <div>
    <div class="container">
        <Nav/>
        <main className={classes.Content}>
            {props.children}
        </main>
      </div>
      <footer class="bg-dark fixed-bottom container">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; TourGuide 2018</p>
      </div>
    </footer>
    </div>
);

export default layout;