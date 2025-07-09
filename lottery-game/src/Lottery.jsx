import { useState } from "react";
import './Lottery.css';
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n = 3, winningSum = 15}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n))
    }

    return(
        <div className="ticket">
            <h1 className>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning == winningSum? "Congratulations, you won!" : ""}</h3>
        </div>
    );
}