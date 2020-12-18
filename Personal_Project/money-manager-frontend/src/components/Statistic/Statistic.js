import React from 'react';
import { DonutMultiple, DonutElement, DonutLabel } from 'react-donut-component' 

const Statistic = props => {



  return (
    <div className='card'>
      <h1 className='header'>Statistic</h1>
      <DonutMultiple>
        <DonutElement color='brown' name="Income">6</DonutElement>
        <DonutElement color='black' name="Expense">4</DonutElement>
      </DonutMultiple>
    </div>    
  );
}

export default Statistic;