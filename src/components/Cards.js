import React from 'react';
import icu from "./icu.jpg"

import patient from "./patient.jpg"
import medicalEquipment from "./medicalEquipment.jpg"
import medicalServices from "./medicalServices.jpg"
import nurseVisiting from "./nurseVisiting.jpg"
import doctorhomevisit from "./doctor-home-visit.jpg"
import './Cards.css';
import CardItem from './CardItem';
import Roll from 'react-reveal/Roll';
import Wobble from 'react-reveal/Wobble';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <Roll left>
            <CardItem
              src={icu}
              text='Icu Care'
              
              path='/services'
              
            />
             </Roll>
             <Roll right>
            <CardItem
               src= {patient}
              text='Patient Care'

              
              path='/services'
            />
            </Roll>
          </ul>
          <ul className='cards__items'>
          <Roll left>
            <CardItem
              src={medicalEquipment}
              text='Medical Equipement on Rent '
              label='Mystery'
              path='/services'
            />
            </Roll>
          
            <Roll right>
            <CardItem
              src={medicalServices}
              text='Nurshing Services'
              label='Adventure'
              path='/products'
            />
            </Roll>
            </ul>
            <ul className='cards__items'>
            <Roll left>
            <CardItem
              src={nurseVisiting}
              text='Home Visit of Nurse for Nurshing Process'
              label='Adrenaline'
              path='/sign-up'
            />
             </Roll>
             <Roll right>
            <CardItem
              src={doctorhomevisit}
              text='Home Visit of Doctor in Emergency Process'
              label='Adrenaline'
              path='/sign-up'
            />
            </Roll>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
