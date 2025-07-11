import TicketNum from "./TicketNum.jsx";
import './Ticket.css';

export default function Ticket({ ticket }) {
    return (
        <div className="Ticket">
            <p className="ticket-title">Ticket</p>
            <div>
                {ticket.map((num, idx) => (
                    <TicketNum num={num} key={idx} />
                ))}
            </div>
        </div>
    );
}