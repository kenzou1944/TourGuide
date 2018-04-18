import React, { Component } from 'react';

//import Aux from '../../hoc/Aux';
//import Tour from '../../components/Tour/Tour';
import TourControls from '../../Components/Tour/TourControls/TourControls';

const Location_PRICES = {
    newyork: 500.0,
    china: 2000.4,
    france: 1300.3,
    canada: 320.7
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        locations: {
            newyork: 0,
            china: 0,
            france: 0,
            canada: 0
        },
        totalPrice: 0.0,
        purchasable: false
    }

    updatePurchaseState ( locations ) {
        const sum = Object.keys( locations )
            .map( igKey => {
                return locations[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addLocationHandler = ( type ) => {
        const oldCount = this.state.locations[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.locations
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = Location_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, locations: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    removeLocationHandler = ( type ) => {
        const oldCount = this.state.locations[type];
        if ( oldCount == 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.locations
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = Location_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, locations: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    render () {
        const disabledInfo = {
            ...this.state.locations
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return (
            <div>
               {/* <Tour Locations={this.state.locations} />*/}
                <TourControls
                    locationAdded={this.addLocationHandler}
                    locationRemoved={this.removeLocationHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice} 
                    count={this.state.locations} 
                    locationPrices={Location_PRICES}/>
            </div>
        );
    }
}

export default BurgerBuilder;