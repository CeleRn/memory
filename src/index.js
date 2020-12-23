import React from "react";
import { render } from "react-dom";
import GameMemory from 'GameMemory';

const Index = () => {
  return (
    <GameMemory/>
  )
};


render(<Index />, document.getElementById('root'));