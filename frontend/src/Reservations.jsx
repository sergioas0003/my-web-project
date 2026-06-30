import { useState } from "react";

function Reservations() {
const [email, setEmail] = useState("");
const [date, setDate] = useState("");
const [partySize, setPartySize] = useState("");
const [timeSlot, setTimeSlot] = useState("");

  function AddReservation(){
    console.log(email + " " + date + " " + partySize + " " + timeSlot);
  }

  return (
    <div>
      <h4>Reservations</h4>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Email</label>
          <input type="text" className="form-control" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Party Size</label>

        <select
            className="form-select"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
        >
            <option value="">Select Party Size</option>
            <option value="2">2 People</option>
            <option value="4">4 People</option>
            <option value="6">6 People</option>
            <option value="8">8 People</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Reservation Time</label>

        <select
            className="form-select"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
        >
            <option value="">Select time</option>
            <option value="12">12:00</option>
            <option value="1pm">13:00</option>
            <option value="2pm">14:00</option>
            <option value="3pm">15:00</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Reservation Date</label>
        <input type="date" className="form-control"
         value={date}
         onChange={(e) => setDate(e.target.value)}/>
      </div>

      <button className="btn btn-dark"
            onClick={() => AddReservation()}>
              Book Reservation
      </button>
    </div>
  );
}

export default Reservations;