import React from 'react'
import './Home.css'
import Down from './Down'
import Middle from './Middle'
import Card from './Card'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='top-section'>
        <h1 className='text-3xl font-extrabold'>Decenteralized <br/>Perpechual Exchange</h1>
        <div className='home-desc'>Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</div>
        <button>Launch Exchange</button>
        <Middle/>
      </div>
      <div className='bottom-section'>
        <Down/>
        <div className='cards'>
          <Card/>
        </div>
      </div>
    </div>
  )
}
