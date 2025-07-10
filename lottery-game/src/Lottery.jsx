import { useState } from "react";
import './Lottery.css';
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from './Button.jsx';

export default function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n))
    }

    return(
        <div className="ticket">
            <h1 className>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <Button action={buyTicket}/>
            <h3>{isWinning? "Congratulations, you won!" : ""}</h3>
        </div>
    );
}