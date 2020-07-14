import React from 'react';

const Card = ({id, name, email}) => {
  console.log("Rendering Card");
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
      <div className="tc">
        <h2 className="f4">{name}</h2>
        <p className="f7">{email}</p>
      </div>
    </div>
  )
}

export default Card;
