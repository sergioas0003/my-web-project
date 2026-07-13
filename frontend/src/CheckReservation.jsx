import { useEffect, useState } from "react";

function CheckReservation() {
  const [reservation, setReservation] = useState([]);
  const [email, setEmail] = useState("");
  const [matches, setMatches] = useState([]);
  const [searched, setSearched] = useState(false);
  
  useEffect(() => {
        loadReservations();
      }, []);

    async function DeleteItem(id, email) {

    await fetch("http://localhost:8080/api/reservations/" + id, {
        method: "DELETE"
    });

    const updatedReservations = await loadReservations();

    const results = updatedReservations.filter(r =>
        r.email.toLowerCase() === email.toLowerCase()
    );

    setMatches(results);
}
  
  async function loadReservations(){
    const response = await fetch("http://localhost:8080/api/reservations");
    const data = await response.json();

    setReservation(data);

    return data;
  }  

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
        <hr />
        {matches.map(r => (
          <div key={r.id}>
            <p>Reservation Name: {r.name}</p>
            <span>
                  <button className="button"
                  onClick={() => DeleteItem(r.id, r.email)}>
                    Cancel Reservation
                  </button>
                </span>
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