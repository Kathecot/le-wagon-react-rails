import React from 'react'

const CardStyle = ({nombre, email, foto, genero}) => {
  return (
    <div className={"card m-3"} style={{width:"18rem"}}>
      <img src={foto} className="card-img-top" alt="profile" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{email}</p>
          <p className="card-text">{genero}</p>
        </div>
    </div>
  )
}

export default CardStyle
