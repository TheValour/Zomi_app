import React from 'react'
import './Earn.css'

export default function TotalReward() {
  return (
    <div className='border border-white m-3 rounded-md'>
      <div className=' earn-subblock' >Total Reward</div>
      <div className='border-b border-white pb-40 px-4 text-gray-300'>
        <div className='earn-inner'><span>ETH (WETH)</span> <span>...($...)</span></div>
        <div className='earn-inner'><span>$Romi</span> <span>...($...)</span></div>
        <div className='earn-inner'><span>Escrowed $Romi</span> <span>...($...)</span></div>
        <div className='earn-inner'><span>Multiple Points</span> <span>...</span></div>
        <div className='earn-inner'><span>Staked Multiple Points</span> <span>...</span></div>
        <div className='earn-inner'><span>Total</span> <span>:$...</span></div>
      </div>
      <button className='p-1 m-4 bg-green-400 rounded-md'>Connect Wallet</button>
    </div>
  )
}
