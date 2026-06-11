import { useState } from 'react';

import Menu from './Menu'; //Think of the menu page as an imported component
import Review from './Review';
import Reservations from './Reservations';

function App() {
   const [page, setPage] = useState("menu");//Sets current page to menu 
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
            onClick={() => setPage("review")}>
                Reviews
            </button>
           
            <button className="btn btn-primary"
            onClick={() => setPage("reservations")}>
                Reservations
            </button>
        </div>

        <hr />

        {page === "menu" && <Menu />}
        {page === "review" && <Review />}
        {page === "reservations" && <Reservations />}
    </div>

  );
}


export default App;