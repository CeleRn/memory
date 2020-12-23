import React from 'react';

import ListCard from 'ListCard';
import './GameMemory.scss';

const GameMemory = () => {
  return (
    <div className="gameMemory">
      <h1 className="gameMemory__title">Игра "Память"</h1>
      <ListCard />
    </div>
  )
}

export default GameMemory;