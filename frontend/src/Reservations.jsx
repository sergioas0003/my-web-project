import { useState } from "react";

function Reservations() {
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [partySize, setPartySize] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [message, setMessage] = useState("");
const [msgColour, setMsgColour] = useState("");

  function AddReservation(){
    if(name === "" || email === "" || partySize === "" || date === "" || time === ""){
      setMsgColour("red");
      setMessage("Please fill in all fields");
    }else{
      setMessage(name + ", your reservation for " + partySize + " has been successfully booked at " + time + "pm on " + date);
      setMsgColour("green");
      
      fetch("http://localhost:8080/api/reservations", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: name,
              email: email,
              date: date,
              partySize: partySize,
              time: time
          })
      });
    }
  }

  return (
    <div>
      <h1>Make a Reservation</h1>
      
      <p style={{ color: msgColour }}>
        {message}
      </p>

      <div className="mb-3">
        <label className="d-flex justify-content-between">Reservation Name</label>
          <input type="text" className="form-control" 
           value={name}
           onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between">Email</label>
          <input type="text" className="form-control" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between">Party Size</label>

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
        <label className="d-flex justify-content-between">Reservation Date</label>
        <input type="date" className="form-control"
         value={date}
         onChange={(e) => setDate(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between">Reservation Time</label>

        <select
            className="form-select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        >
            <option value="">Select time</option>
            <option value="12">12:00</option>
            <option value="1">13:00</option>
            <option value="2">14:00</option>
            <option value="3">15:00</option>
            <option value="4">16:00</option>
            <option value="5">17:00</option>
        </select>
      </div>

      <button className="submit-btn mt-3"
            onClick={() => AddReservation()}>
              Book Reservation
      </button>
    </div>
  );
}

export default Reservations;