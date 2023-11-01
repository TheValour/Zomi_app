import React from 'react'
import './Earn.css'

export default function Vault() {
  return (
    <div className='border border-white m-3 rounded-md'>
      <div className=' earn-subblock' >Romi Vault</div>
      <div className='border-b border-white pb-3 px-4 text-gray-300'>
        <div className='earn-inner'><span>Staked Token</span> <span>...</span></div>
        <div className='earn-inner'><span>Reserve for Vesting</span> <span>...</span></div>
        <div className='earn-inner'><span>Vesting Status</span> <span>...</span></div>
        <div className='earn-inner'><span>Claimable</span> <span>:$...</span></div>
      </div>
      <button className='p-1 m-4 bg-green-400 rounded-md'>Connect Wallet</button>
    </div>
  )
}
