function App() {
  return (
    
    <div className="container">
        <div className="d-flex gap-2 p-3 bg-light border rounded">
            
            <button 
            className="btn btn-primary"
            onClick= {sayHello}
            >
                Menu
            </button>
            
            <button className="btn btn-primary">
                Reservations
            </button>
           
            <button className="btn btn-primary">
                Reviews
            </button>
        </div>
    </div>

  );
}

function sayHello() {
    alert("Hello!");
  }

export default App;