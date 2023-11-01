import React from 'react'
import './Earn.css'

export default function EarnBlock() {
  return (
    <div className='border border-white m-4 rounded-md'>
      <div className=' earn-subblock ' >$Romi</div>
      <div className='earn-subblock'>
        <div className='earn-inner'><span>Price</span> <span>:$0</span></div>
        <div className='earn-inner'><span>Wallet</span> <span>:$Romi</span></div>
        <div className='earn-inner'><span>Staked</span> <span>:$Romi</span></div>
      </div>
      <div className='earn-subblock'>
        <div className='earn-inner'><span>APR</span> <span>%</span></div>
        <div className='earn-inner'><span>Reward</span> <span>:$</span></div>
        <div className='earn-inner'><span>Multiple Point APR</span> <span>100%</span></div>
        <div className='earn-inner'><span>Boost Percentage</span> <span>$</span></div>
      </div>
      <div className='earn-subblock'>
        <div className='earn-inner'><span>Total Stacked</span> <span>$</span></div>
        <div className='earn-inner'><span>Total Supply </span> <span>$</span></div>
      </div>
      <button className='p-1 m-4 bg-green-400 rounded-md'>Buy $Romi</button>
    </div>
  )
}
