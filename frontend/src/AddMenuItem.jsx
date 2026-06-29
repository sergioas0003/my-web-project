import { useEffect, useState } from "react";

function AddMenuItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function AddItem(){//Create new Menu Item button function
    fetch("http://localhost:8080/api/menu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            description: description,
            price: price
        })
    });
  }

  return (
    <div>
      <h4><b>Add New Item to Menu</b></h4>
      <p>Fill in the new menu item name, description and price in the relevant space below and press submit</p>
      
      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Name</label>
          <input type="text" className="form-control" 
           value={name}
           onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Price</label>
          <input type="text" className="form-control"
           value={price}
           onChange={(e) => setPrice(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Item Description</label>
          <input type="text" className="form-control"
           value={description}
           onChange={(e) => setDescription(e.target.value)}/>
      </div>

      <button className="btn btn-dark"
            onClick={() => AddItem()}>
              Add to Menu
      </button>
    </div>

  );
}

export default AddMenuItem;