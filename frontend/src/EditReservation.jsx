import { useEffect, useState } from "react";

function EditReservation() {
  const [reservation, setReservation] = useState([]);

  async function DeleteItem(id){//async, loadReservations and await allows for instant update on rseervation deletion
    await fetch("http://localhost:8080/api/reservations/" + id, {// if "" is used, the id paraamter does not convert
      method: "DELETE"
    });
    loadReservations();
  }

    useEffect(() => {
      loadReservations();
    },[]);
  
  function loadReservations(){
    fetch("http://localhost:8080/api/reservations")
    .then(response => response.json())
    .then(data => setReservation(data));
  }  

  return (
    <div>
      <h1>Delete Reservation</h1>
      
      <div>
       {reservation.map(item => (
          <div key={item.id}>
              <p className="d-flex justify-content-between align-items-center mb-3">
                <span>{"Email: " + item.email}</span>
                <span>
                  <button className="btn btn-danger"
                  onClick={() => DeleteItem(item.id)}>
                    Delete
                  </button>
                </span>
              </p>
              <p className="d-flex fst-italic mb-3"> 
                {"Reservation name: " + item.name}
              </p>
              <p className="d-flex fst-italic mb-3"> 
                {"Date: " + item.date}
              </p>
              <p className="d-flex fst-italic mb-3"> 
                {"Time: " + item.time}
              </p>
              <p className="d-flex fst-italic mb-3"> 
                {"Party Size: " + item.partySize}
              </p>
              <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditReservation;