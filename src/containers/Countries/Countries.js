import React, { Component } from 'react'

import './Countries.css'

import HeadingNames from '../../components/WorldStats/HeadingNames/HeadingNames';

export default class Countries extends Component {

render() {

  return (
    <div className='countries-stats'>
      <h2 className='countries-stats-heading'>Countries Stats</h2>
      <div className='Filtering'>
        <input type='text' placeholder='Enter Country Home' />
        <select className='sort-by'>
          <option>Highest</option>
          <option>Lowest</option>
        </select>
      </div>
      <HeadingNames />
    </div>
  )
}
}
  
  
  
