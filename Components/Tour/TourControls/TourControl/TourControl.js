import React from 'react';
import classes from './TourControl.css';

const TourControl = (props) => (
	<div>
		<div>{props.label} cost:${props.local}  &emsp; <br/><br/> Tickets: {props.counter}</div>
		<br/>
        <button 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
             &emsp;
        <button 
            onClick={props.added}>More</button>

	</div>
);

export default TourControl;