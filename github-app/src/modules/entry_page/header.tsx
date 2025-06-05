import React from 'react'
import NavLink from './navlink'
import classes from './header.module.css'

const Header = () => {
    return (
        <div>
        <header>
            <div className={classes.logo_container}> 
            <img src="/images/github-mark-white.png" alt="logo" className={classes.logo} />
            <nav className={classes.nav}>
                <NavLink to="/product" text="Product" isActive={true} />
                <NavLink to="/solutions" text="Solutions" isActive={true} />
                <NavLink to="/resources" text="Resources" isActive={true} />
                <NavLink to="/open-source" text="Open Source" isActive={true} />
                <NavLink to="/enterprise" text="Enterprise" isActive={true} />
                <NavLink to="/pricing" text="Pricing" isActive={false} />
            </nav>
            </div>

            <div className={classes.search_container}>
                <input type="text" placeholder="Search GitHub" className={classes.search_input} />
                <NavLink to="/sign-in" text="Sign in" isActive={false} />
                <NavLink to="/sign-up" text="Sign up" isActive={false} className={classes.sign_up_button} />
            </div>
        </header>
        <main className={classes.main_container}>
            <div className={classes.main_content}>
                <h1 style={{fontSize: '4rem', fontWeight: '600', color: '#d0d7de'}}>Build and ship software on a<br></br> single, collaborative platform</h1>
                <p style={{fontSize: '1.2rem', fontWeight: '400', color: '#d0d7de'}}>Join the world’s most widely adopted AI-powered developer platform.</p>
                <div className={classes.input_container}>
                    <input type="text" placeholder="Enter your email" className={classes.input_search} />
                    <button className={classes.input_button}>Search For Email</button>  
                </div>
            </div>
        </main>
        </div>
    )
}

export default Header