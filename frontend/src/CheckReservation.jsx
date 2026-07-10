import { useEffect, useState } from "react";

function CheckReservation() {
  const [reservation, setReservation] = useState([]);
  const [email, setEmail] = useState("");
  const [matches, setMatches] = useState([]);
  const [searched, setSearched] = useState(false);
  
  useEffect(() => {

        fetch("http://localhost:8080/api/reservations") // retrieves data from menu
            .then(response => response.json())
            .then(data => setReservation(data));}, 
    []);

  function Search(email) {
    const results = reservation.filter(r => r.email.toLowerCase() === email.toLowerCase());

    setMatches(results);
    setSearched(true);
}
  return (
    <div>
      <h1>Check Your Reservations</h1>
      
      <div className="mb-3">
        <label className="d-flex justify-content-between">Enter your email</label>
          <input type="text" className="form-control" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div>
        <button className="button"
          onClick={() => Search(email)}>
            Search
        </button>
        
        {matches.map(r => (
          <div key={r.id}>
            <p>Reservation Name: {r.name}</p>
            <p>Email: {r.email}</p>
            <p>Date: {r.date}</p>
            <p>Time: {r.time} pm</p>
            <p>Party Size: {r.partySize}</p>
            <hr />
          </div>))}

      {searched && matches.length === 0 && (
      <p>No reservations were found.</p>
      )}
      </div>
    </div>
  );
}

export default CheckReservation;