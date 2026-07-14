import { useState } from 'react';

import Home from './Home';
import Menu from './Menu'; //Think of the menu page as an imported component
import Reservations from './Reservations';
import AddMenuItem from './AddMenuItem'; 
import DeleteMenuItem from './DeleteMenuItem'; 
import Login from './Login'; 
import CheckReservation from './CheckReservation'; 
import EditReservation from './EditReservation'; 

function App() {
   const [page, setPage] = useState("home");//Sets current page to menu 
   const [loggedIn, setLoggedIn] = useState(false);

    return (   
    
    <div className="clear-container">
        <div className="navbar">{/* This creates the navbar */}
            
            <button 
            className="button" //Color of button blue
            onClick={() => setPage("menu")}//Sets the current page to menu
            >
                Menu {/* Button text */}
            </button>
            
            <button className="button"
            onClick={() => setPage("home")}>
                Home
            </button>
           
            <button className="button"
            onClick={() => setPage("reservations")}>
                Make a Reservation
            </button>

            <button className="button"
            onClick={() => setPage("check reservation")}>
                Check Reservation
            </button>

            <button className="button"
            onClick={() => setPage("login")}>
                Login
            </button>
            
            {loggedIn && (
            <>
                <button className="admin-btn"
                onClick={() => setPage("add menu item")}>
                    Add Menu Item
                </button>

                <button className="admin-btn"
                onClick={() => setPage("delete menu item")}>
                    Delete Menu Item
                </button>

                <button className="admin-btn"
                onClick={() => setPage("edit menu item")}>
                    Edit Reservation
                </button>
            </>
            )}
        </div>

      <div className="app-container">

        {page === "menu" && <Menu />}
        {page === "home" && <Home />}
        {page === "reservations" && <Reservations />}
        {page === "add menu item" && <AddMenuItem />}
        {page === "delete menu item" && <DeleteMenuItem />}
        {page === "login" && <Login setLoggedIn={setLoggedIn} />}
        {page === "check reservation" && <CheckReservation />}
        {page === "edit menu item" && <EditReservation />}

        </div>   
        
    </div>

  );
}

export default App;