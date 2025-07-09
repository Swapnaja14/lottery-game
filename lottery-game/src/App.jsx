import { useState } from 'react'
import './App.css'
import Lottery from './Lottery.jsx'

export default function App() {
  return (
    <>
      <Lottery n={3} winningSum={15}/>
    </>
  )
}