import { useState } from 'react'
import './App.css'
import Lottery from './Lottery.jsx'
import {sum} from './helper.js'

export default function App() {
  let winCondition = (ticket) => {
    return ticket[1] === 1;
  };

  
  return (
    <>
      <Lottery n={3} winningSum={15} winCondition={winCondition}/>
    </>
  );
}