import { useEffect, useState } from "react";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/api/menu")
            .then(response => response.json())
            .then(data => setMenuItems(data));}, []);
  
  return (
    <div>
      <h2>Lunch Menu</h2>
      <p>Items loaded: {menuItems.length}</p>
      <div>
       {menuItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>€{item.price}</p>
                </div>
            ))}
            </div>
       <input type="text" 
       className="form-control"/>
    </div>

  );
}


export default Menu;