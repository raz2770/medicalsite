import React from 'react';
import './aboutus.css';
import Zoom from 'react-reveal/Zoom';

import { Button } from './Button';
import { Link } from 'react-router-dom';
import Rotate from 'react-reveal/Zoom';

function AboutUs() {
  return (
    <div className='abt'>
    
      <div className='abt__container'>
        <div className='abt__wrapper'>
        <Rotate top left>
        <h1>About us :)</h1>
                             </Rotate>
                             <Rotate topright>                    
        <ul className='ul'>
            
            <p>Home healthcare can provide management of chronic illness more cost-efficiently than the hospital or nursing homes Because we will finish the competition in-home care business,
            we take care of the patient in the internal sense of home care. Our internal care means that we need 
             we treat the patient with an internal soul and not from the outside only 
            And if the patient starts recovering from the internal soul, then the disease is spring goes out 
             within Dehradun, we are giving training to our staff only, that they are mentally, physically and the perfect to fix
            the soul is our passion the patient should be fit physically and mentally :)</p>
        </ul>
        </Rotate>
    </div>
      </div>
    </div>
  );
}

export default AboutUs;
