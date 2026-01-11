import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/");
    }
  },[]);

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please Enter Correct Email OR Password");
    }
  };

  return (
    <div>
      <form action="">
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            className="inputBox"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="email"
          />

          <input
            type="password"
            className="inputBox"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
          />

          <button onClick={handleLogin} className="signButton" type="button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
