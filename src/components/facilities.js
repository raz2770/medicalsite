import React from 'react';
import './facilities.css';
import CardItem from './CardItem';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';

function Facilities() {
  return (
    <div className='fct'>
    
      <div className='fct__container'>
        <div className='fct__wrapper'>
        <Rotate top left>
        <h1>Emergency Medical Services-: In need of someone's for an urgent injection or something else our 
                             experts are just a call away :)</h1>
                             </Rotate>
                             <Rotate topright>                    
        <ul className='ul'>
            
            <li>
                
                  R<sub>x</sub> IV, IM, or other injections 
            </li>
                <li >
                R<sub>x</sub> Ryle's tube change 
                </li>
                <li>
                
                R<sub>x</sub> urinary catheter change 
            </li>
                <li>
                R<sub>x</sub> vital monitoring 
                </li>
                <li>
                
                R<sub>x</sub> wound dressing with aseptic technic 
            </li>
                <li>
                R<sub>x</sub> Bed sore management
                </li>
                <li>
                
                R<sub>x</sub> Bladder wash care 
            </li>
                <li>
                R<sub>x</sub>Colostomy Bag Care
                </li>
                <li>
                
                R<sub>x</sub> Sample Collection Blood 
            </li>
                <li>
                R<sub>x</sub> Ecg Recording
                </li>
                <li>
                
                R<sub>x</sub>Nebulizer 
            </li>
                <li>
                R<sub>x</sub> Enemy adminstration
                </li>
                <li>
                
                R<sub>x</sub> Diabetic Foot care
            </li>
                <li>
                R<sub>x</sub> Suture Removed  
                </li>
                <li> 
                R<sub>x</sub> Les/Peg Tube Feeding
                </li>
                <li>
                
                R<sub>x</sub> Patient Care on Ventilators/Bipap
            </li>
                <li>
                R<sub>x</sub> Unconscious Bed Ridder patient Care
                </li>
                <li>
                
                R<sub>x</sub> Oxygen Therapy Care
            </li>
                <li>
                R<sub>x</sub> Trachestomy care 
                </li>
                
            
        </ul>
        </Rotate>
    </div>
      </div>
    </div>
  );
}

export default Facilities;
