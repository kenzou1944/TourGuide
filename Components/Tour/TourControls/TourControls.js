import React from 'react';
import TourControl from './TourControl/TourControl';
import classes from './TourControls.css';

const controls = [
	{label:'NewYork', type:'newyork'},
	{label:'China', type:'china'},
	{label:'France', type:'france'},
	{label:'Canada', type:'canada'},
];

const TourControls = (props) => (
	<div>
    <div >
		 <p >Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    </div>
    <div className={classes.control}>
        {controls.map(ctrl => (
            <TourControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.locationAdded(ctrl.type)}
                removed={() => props.locationRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                counter={props.count[ctrl.type]}
                local={props.locationPrices[ctrl.type]} />
        ))}
    </div>

    <div className={classes.order}>
        <button 
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
	</div>
);

export default TourControls;