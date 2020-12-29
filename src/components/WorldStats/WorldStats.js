import React from 'react';
import './WorldStats.css';

export const WorldStats = (props) => {

  return (
    <div>
      <h1 className='totalNumbers'>{props.total}</h1>
      <p className='about'>{props.about}</p>
    </div>
  )
}

export default WorldStats;


