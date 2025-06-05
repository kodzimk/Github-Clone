import React from 'react'
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header_left}>
           <div className={classes.logo_container}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
           </div>
           <img src='/images/github-mark-white.png' alt="logo" className={classes.logo} />
           <h3>Dashboard</h3>
           </div>
           <div className={classes.header_right}>
                <input type="text" placeholder='Type [/] to search' className={classes.search_input} />
                <div className={classes.line_separator}></div>
                <div className={classes.notification_container}></div>
                <div className={classes.issue_container}></div>
                <div className={classes.pull_request_container}></div>
                <div className={classes.line_separator}></div>
                <img src = 'https://avatars.githubusercontent.com/u/141517472?s=400&u=6eaf97d5aecb7bfa65c8879894121dc4a45d018b&v=4' className={classes.profile_container}/ >
           </div>
        </div>
    )
}

export default Header;