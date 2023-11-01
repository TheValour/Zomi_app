import React from 'react'
import './Home.css'
import { romi, zlp} from '../../photos'

export default function Card() {
  return (
    <>
      <div className='card-container'>
          <div className='card-image'>
              <img src={romi} alt="img" />
              <span>$Romi</span>
          </div>
          <span>
          $Romi is the utility and governance token. Accrues 30% of the platform's generated fees.
          </span>
          <div>
              Etherem APR : 0.0%
          </div>
          <div>
              <button>Buy</button>
              <button>Read More</button>
          </div>
      </div>
      <div className='card-container'>
          <div className='card-image'>
              <img src={zlp} alt="img" />
              <span>$ZLP</span>
          </div>
          <span>
          $ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.
          </span>
          <div>
              Etherem APR : 1,654,037,582.50%
          </div>
          <div>
              <button>Buy</button>
              <button>Read More</button>
          </div>
      </div>
    </>
  )
}
