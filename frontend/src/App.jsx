import { useState } from 'react';

import Home from './Home';
import Menu from './Menu'; //Think of the menu page as an imported component
import Reservations from './Reservations';

function App() {
   const [page, setPage] = useState("home");//Sets current page to menu 
    return (   
    
    <div className="container">
        <div className="d-flex gap-2 p-3 bg-light border rounded">{/* This creates the navbar */}
            
            <button 
            className="btn btn-primary" //Color of button blue
            onClick={() => setPage("menu")}//Sets the current page to menu
            >
                Menu {/* Button text */}
            </button>
            
            <button className="btn btn-primary"
            onClick={() => setPage("home")}>
                Home
            </button>
           
            <button className="btn btn-primary"
            onClick={() => setPage("reservations")}>
                Reservations
            </button>
        </div>

        <hr />

        {page === "menu" && <Menu />}
        {page === "home" && <Home />}
        {page === "reservations" && <Reservations />}
    </div>

  );
}


export default App;