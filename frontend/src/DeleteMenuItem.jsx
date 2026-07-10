import { useEffect, useState } from "react";

function DeleteMenuItem() {
  const [menuItems, setMenuItems] = useState([]);

  async function DeleteItem(id){//async, loadMenuItems and await allows for instant update on menu deletion
    await fetch("http://localhost:8080/api/menu/" + id, {// if "" is used, the id paraamter does not convert
      method: "DELETE"
    });
    loadMenuItems();
  }

    useEffect(() => {
      loadMenuItems();
    },[]);
  
  function loadMenuItems(){
    fetch("http://localhost:8080/api/menu")
    .then(response => response.json())
    .then(data => setMenuItems(data));
  }  

  return (
    <div>
      <h1>Delete Menu Item</h1>
      
      <div>
       {menuItems.map(item => (
          <div key={item.id}>
              <p className="d-flex justify-content-between fw-bold">
                <span>{item.name}</span>
                <span>
                  <button className="button"
                  onClick={() => DeleteItem(item.id)}>
                    Delete
                  </button>
                </span>
              </p>
              <p className="d-flex fst-italic mb-3"> 
                {item.description}
              </p>
              <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteMenuItem;