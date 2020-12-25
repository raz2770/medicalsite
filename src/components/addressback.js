import React from 'react';
import './addressback.css';
import Zoom from 'react-reveal/Zoom';

import { Button } from './Button';
import { Link } from 'react-router-dom';

function AddressBack() {
  return (
    <div className='address-container'>
      
      <Zoom top>
      <div className='address-ad'> 
      <p>Mussoorie diversion road,<br/>malsi po sinola behind hotel forest avenue Dehradun <br/>248009</p>
        
      </div>
      </Zoom>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
           
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          
        </div>
      </section>
    </div>
  );
  
}

export default AddressBack;
