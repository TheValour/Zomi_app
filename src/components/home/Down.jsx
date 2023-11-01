import React from 'react'
import './Home.css'
import { img1, img2, img3 } from '../../photos'

export default function Down() {
  return (
    <div className='down-section flex'> 
        <div className='small-box'>
          <div className='flex sub-box'>
            <img src={img1} alt="img" />
            <span>Reduce Liquid Risks</span >
          </div>
            <div>
                An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.
            </div>
        </div>

        <div className='small-box'>
          <div className='flex sub-box'>
            <img src={img2} alt="img" />
            <span>Save on Costs </span>
          </div>
            <div>
            Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.
            </div>
        </div>
        
        <div className='small-box'>
          <div className='flex sub-box'>
          <img src={img3} alt="img" />
            <span>Simple Swap </span>
          </div>
            <div>
            Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.
            </div>
        </div>
      </div>
  )
}
