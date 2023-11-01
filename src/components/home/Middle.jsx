import React from 'react'
import './Home.css'
import { img4, img5, img6 } from '../../photos'

export default function Middle() {
  return (
    <div className='middle-section flex'> 
        <div className='small-box'>
          <img src={img6} alt="img" />
          <div>
            <span>Total Trading </span>
            <h2>$0</h2>
          </div>
        </div>
        <div className='small-box'>
          <img src={img5} alt="img" />
          <div>
            <span>Open Interest</span>
            <h2>$0</h2>
          </div>
        </div>
        <div className='small-box'>
          <img src={img4} alt="img" />
          <div>
            <span>Total User</span>
            <h2>$0</h2>
          </div>
        </div>
      </div>
  )
}
