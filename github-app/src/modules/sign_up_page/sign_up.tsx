import React, { useContext, useState } from "react";
import classes from "./sign_up.module.css";
import { GlobalContext } from "../../shared/global";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [globalState, setGlobalState] = useContext(GlobalContext);
    const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    country: "",
    receive_updates: false,
  });

  function setUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, username: event.target.value });
  }

  function setEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, email: event.target.value });
  }

  function setCountry(event: React.ChangeEvent<HTMLSelectElement>) {
    setState({ ...state, country: event.target.value });
  }

  function setReceiveUpdates(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, receive_updates: event.target.checked });
  }

  function setPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, password: event.target.value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(state.email.length === 0){
        alert("Please fill in your email");
        return;
    }
    if(state.password.length < 15 && state.password.length < 8){
        alert("Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.");
        return;
    }
    if(state.username.length < 3 || state.username.length > 39){
        alert("Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.");
    }

    if(localStorage.getItem(`${state.email}`)){
        alert("Email already exists");
        return;
    }
    if(localStorage.getItem(`${state.username}`)){
        alert("Username already exists");
    }

    let user = localStorage.getItem(`${state.email}`);
    if(user){
      alert("Email already exists");
      return;
    }
    user = localStorage.getItem(`${state.username}`);
    if(user){
      alert("Username already exists");
      return;
    }

    localStorage.setItem(`${state.email}`, JSON.stringify(state));
    localStorage.setItem(`${state.username}`, JSON.stringify(state));
    
    setGlobalState(state);
    navigate("/main");
  }

  return (
    <div className={classes.sign_up_container}>
    <canvas className={classes.sign_up_canvas}></canvas>    
      <div className={classes.sign_up_content}>
        
        <div className={classes.sign_up_content_header}>
        <h1>Already have an account?</h1>
        <Link to="/sign-in" className={classes.sign_up_content_header_link}>Sign in</Link>
        </div>

        <h2>Sign in to GitHub</h2>
        <form className={classes.form}>
          <div className={classes.form_group}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" onChange={setEmail} />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" onChange={setPassword} />
            <p>Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
          </div>
            <div className={classes.form_group}>
            <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" onChange={setUsername} />
                <p>Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.</p>
            </div>
            <div className={classes.form_group}>
                <label htmlFor="country">Country</label>
                <select defaultValue="United States" onChange={setCountry}>
                   <option value="United States">United States</option>
                   <option value="United Kingdom">United Kingdom</option>
                   <option value="Canada">Canada</option>
                   <option value="Australia">Australia</option>
                   <option value="New Zealand">New Zealand</option>
                   <option value="India">India</option>              
                </select>
                <p>For compliance reasons, we're required to collect country information to send you occasional updates and announcements.</p>
            </div>
            <div className={classes.checkbox_group}>
                <input type="checkbox" id="receive_updates" style={{accentColor: "white"}} onChange={setReceiveUpdates}/>
                <label htmlFor="receive_updates">Receive occasional product updates and announcements</label>
            </div>
          <button type="submit" className={classes.sign_up_button} onClick={handleSubmit}>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
