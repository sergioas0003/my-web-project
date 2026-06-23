import { useEffect, useState } from "react";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {

        fetch("http://localhost:8080/api/menu") // retrieves data from menu
            .then(response => response.json())
            .then(data => setMenuItems(data));}, 
    []);
  
  return (
    <div>
      <h4>Lunch Menu</h4>
      
      <div>
       {menuItems.map(item => (
          <div key={item.id}>
              <p className="d-flex justify-content-between fw-bold">
                <span>{item.name}</span>
                <span>€{item.price}</span>
              </p>
              <p className="d-flex fst-italic mb-3"> {item.description}</p>
          </div>
        ))}
      </div>
       <input type="text" 
       className="form-control"/>
    </div>
  );
}

export default Menu;