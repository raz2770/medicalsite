import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
        
         
            <h1 className='cards__item__pic-wrap' style={{ backgroundImage: `url(${props.src})` }}>
              {props.text}
            </h1>
          
         
        </div>
      </li>
    </>
  );
}

export default CardItem;
