import { useState } from 'react'
import './App.css'
import Lottery from './Lottery.jsx'
import Ticket from './Ticket.jsx'

export default function App() {
  return (
    <>
      <Ticket ticket={[0, 1, 2]}/>
      <Ticket ticket={[2, 4, 6, 8, 9, 1]}/>
    </>
  )
}