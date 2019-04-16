import React, { Component } from 'react';
import './App.css';
/*import SearchComponent from './components/searchBox/search-component'
import BudgetCalculator from './components/budgetCalculator/budgetCalculator'
import HeaderLinks from './components/HomeHeaderLinks/HomeHeaderLinks/HomeHeaderLinks'
import DeliveryDetails from './components/DeliveryDetails/DeliveryDetails';
import MiniCart from './components/MiniCart/MiniCart';

import Login from './components/Login/Login';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
*/import OrderInformation from './components/OrderInformation/OrderInformation';

class App extends Component {
  render() {
    const state = {
      isWeeklyBudget: true,
      budgetAmount: "100.00",
      availableAmount: "100.00",
      periodEnd: "2019-03-22",
      periodStart: "2019-03-22",
      language: "en"
    }
    return (
      <>
        {/*<HeaderLinks language={state.language} />
        <SearchComponent language={state.language} />
        <BudgetCalculator {...state} />
        <Login language={state.language} />
       <MiniCart {...state} />
       <OrderConfirmation {...state} />
        <DeliveryDetails {...state}/>
        */} <OrderInformation {...state} />
      </>
    );
  }
}

export default App;
