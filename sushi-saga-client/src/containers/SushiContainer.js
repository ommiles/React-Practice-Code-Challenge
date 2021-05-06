import React, { Fragment } from 'react';
import Sushi from '../components/Sushi';
import IncreaseBalance from '../components/IncreaseBalance';

const SushiContainer = ({ sushi, buySushi, handleSubmit }) => {
  return (
    <Fragment>
      <div className='belt'>
        {sushi.map((sushiObj) => {
          return (
            <Sushi
              key={sushiObj.id}
              id={sushiObj.id}
              name={sushiObj.name}
              img_url={sushiObj.img_url}
              price={sushiObj.price}
              buySushi={buySushi}
            />
          )
        })}
        <IncreaseBalance handleSubmit={handleSubmit} />
      </div>
    </Fragment>
  )
}

export default SushiContainer;
