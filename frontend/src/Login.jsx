import { useState } from "react";

function LogIn() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [msgColor, setMsgColor] = useState("");

function Submit(){
  if(username == "a" && password == "b"){
      setMessage("Login successful!");
      setMsgColor("green");
  }else{
    setMessage("Incorrect username or passsword.");
    setMsgColor("red");
  }
}

  return (
    <div>
      <h1>Admin Login.</h1>
      <p>Enter your username and password below.</p>
      <h1 style={{ color: msgColor }}>
        {message}
      </h1>
    
      <div className="mb-3">
        <label className="d-flex justify-content-between">Username</label>
          <input type="text" className="form-control" 
           value={username}
           onChange={(e) => setUsername(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between">Password</label>
          <input type="text" className="form-control" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <button className="submit-btn mt-3"
            onClick={() => Submit()}>
              Login
      </button>
    </div>
  );
}

export default LogIn;