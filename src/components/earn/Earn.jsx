import React from 'react'
import EarnBlock from './EarnBlock'
import TotalReward from './TotalReward'
import Vault from './Vault'

export default function Earn() {
  return (
    <section className='p-6 earn-container bg-black grid grid-rows-11 grid-cols-2 gap-0 w-screen text-white'>
        <div className='col-span-2 m-4'>
          <h1 className='text-2xl font-bold'>Earn</h1>
          <div>Stake $Romi and $ZLP to earn rewards.</div>
        </div>
        <EarnBlock/>
        <TotalReward/>
        <EarnBlock/>
        <EarnBlock/>
        <div className='col-span-2 m-4'>
          <h2 className='text-2xl font-bold'>Vest</h2>
          <div>Convert esRomi tokens to $Romi tokens.</div>
        </div>
        <div>
          <Vault/>
        </div>
        <div>
          <Vault/>
        </div>
    </section>
  )
}
