import classes from "./sign_in.module.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../shared/global";

const initial = {
    username: "",
    password: "",
}

const SignIn = () => {
    const navigate = useNavigate();
    const [state, setState] = useState(initial);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, username: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(state.username.length === 0){
            alert("Please fill in your username");
            return;
        }
        if(state.password.length === 0){
            alert("Please fill in your password");
            return;
        }
        const user = JSON.parse(localStorage.getItem(`${state.username}`) as string) as GlobalProps;

        if(!user){
            alert("User not found");
            return
        }

        if(state.password != user.password){
            alert("Invalid password");
            return;
        }
        navigate("/main");
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, password: e.target.value});
    }
        

    return (
        <div className={classes.sign_in_container}>
            <img src=" /images/github-mark-white.png" alt="logo" className={classes.logo} />
            <h2>Sign in to GitHub</h2>
            <div className={classes.sign_in_content}>
                <form>
                    <div className={classes.form_group}>    
                        <label htmlFor="username">Username or email address</label>
                        <input type="text" value={state.username} onChange={handleChange} />
                    </div>
                    <div className={classes.form_group}>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={state.password} onChange={handlePasswordChange} />
                    </div>
                </form>

                <button className={classes.sign_in_button} onClick={handleSubmit}>Sign in</button>
            </div>  
            <div className={classes.sign_in_footer}>
                <p>New to GitHub? <Link to="/sign-up" className={classes.sign_in_footer_link}>Sign up</Link></p>
            </div>
        </div>
    )
}

export default SignIn;