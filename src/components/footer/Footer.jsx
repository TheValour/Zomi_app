import React from 'react';
import './Footer.css'
import { github, discord, telegram, twitter, media, logo } from '../../photos';

function Footer() {
  return (
    <section className='footer-container'>
        <div className='footer-block flex'>
            <img src={logo} alt="img" />
            <div className='links flex'>
                <a href="/"><img src={discord} alt="img" /></a>
                <a href="/"><img src={github} alt="img" /></a>
                <a href="/"><img src={media} alt="img" /></a>
                <a href="/"><img src={twitter} alt="img" /></a>
                <a href="/"><img src={telegram} alt="img" /></a>
            </div>
            <div>
                <span>Terms and Conditions</span>
                <span>Referral Terms</span>
                <span>Media Kit</span>
            </div>
        </div>
    </section>
  );
}

export default Footer;
