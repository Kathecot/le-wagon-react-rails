import React from 'react';
import info from './../info.json';
import CardStyle from './CardStyle';

const Card = ({ persona }) => {
  return (
    <div className='container'>
      <div className='row justify-content-around'>
        {info.map((persona) => {
          return (
            <CardStyle genero={persona.gender} nombre={persona.name.first} email={persona.email} foto={persona.picture.large}></CardStyle>)
          })}
      </div>
    </div>
  )
}

export default Card
