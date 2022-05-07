import React, { useEffect, useState } from 'react';
import CardStyle from './CardStyle';

const Card = ({ persona }) => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then(response => response.json())
      .then((response) => {
        setPersonas(response.results);
      })
  }, [])
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-around'>
        {personas.map((persona) => {
          return (
            <CardStyle genero={persona.gender} nombre={persona.name.first} email={persona.email} foto={persona.picture.large}></CardStyle>)
          })}
      </div>
    </div>
  )
}

export default Card
