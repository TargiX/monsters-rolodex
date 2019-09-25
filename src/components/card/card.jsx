import React from 'react';
import './card.css';


export const Card = props => (
   <div className='card-container'>
   <img src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} alt=""/>
      <h2> {props.monster.name}</h2>
      <p>{props.monster.email}</p>
   </div>
)