import { useState } from 'react';

import Home from './Home';
import Menu from './Menu'; //Think of the menu page as an imported component
import Reservations from './Reservations';
import AddMenuItem from './AddMenuItem'; 
import DeleteMenuItem from './DeleteMenuItem'; 

function App() {
   const [page, setPage] = useState("home");//Sets current page to menu 
    return (   
    
    <div className="container">
        <div className="d-flex gap-2 p-2 #f5f0e1">{/* This creates the navbar */}
            
            <button 
            className="btn btn-dark" //Color of button blue
            onClick={() => setPage("menu")}//Sets the current page to menu
            >
                Menu {/* Button text */}
            </button>
            
            <button className="btn btn-dark"
            onClick={() => setPage("home")}>
                Home
            </button>
           
            <button className="btn btn-dark"
            onClick={() => setPage("reservations")}>
                Reservations
            </button>

            <button className="btn btn-primary"
            onClick={() => setPage("add menu item")}>
                Add Menu Item
            </button>

            <button className="btn btn-primary"
            onClick={() => setPage("delete menu item")}>
                Delete Menu Item
            </button>
        </div>

        <hr />

        {page === "menu" && <Menu />}
        {page === "home" && <Home />}
        {page === "reservations" && <Reservations />}
        {page === "add menu item" && <AddMenuItem />}
        {page === "delete menu item" && <DeleteMenuItem />}
    </div>

  );
}

export default App;