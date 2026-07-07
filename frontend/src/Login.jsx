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
      <h>Enter your username and password below.</h>
      <h4 style={{ color: msgColor }}>
        {message}
      </h4>
    
      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Username</label>
          <input type="text" className="form-control" 
           value={username}
           onChange={(e) => setUsername(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label className="d-flex justify-content-between fw-bold">Password</label>
          <input type="text" className="form-control" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <button className="btn btn-dark"
            onClick={() => Submit()}>
              Login
      </button>
    </div>
  );
}

export default LogIn;