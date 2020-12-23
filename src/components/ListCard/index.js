import React, { useLayoutEffect } from 'react';

import './ListCard.scss';

const cardsArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

const ListCard = () => {
  return (
    <div className="listCard">
      {cardsArray.map( (item) => (
        <div className="listCard__item">{item}</div>
      ))}
    </div>
  )
}

export default ListCard;