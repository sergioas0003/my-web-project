function AddMenuItem() {
  return (
    <div>
      <h4><b>Add New Item to Menu</b></h4>
      <p>Fill in the new menu item name, description and price in the relevant space below and press submit</p>
      
      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Name</label>
          <input type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Price</label>
          <input type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Item Description</label>
          <input type="text" className="form-control"/>
      </div>

      <button className="btn btn-dark"
            onClick={() => setPage("reservations")}>
              Submit
      </button>
    </div>

  );
}

export default AddMenuItem;