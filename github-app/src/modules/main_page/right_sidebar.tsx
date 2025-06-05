import React from 'react'
import classes from './right_sidebar.module.css'

const RightSidebar = () => {
    return (
        <div className = {classes.right_sidebar_container}>
            <div className = {classes.right_sidebar_container_item}>
                <h3>Latest changes</h3>

                <div className = {classes.right_sidebar_container_item_content}>
                    <div className = {classes.right_sidebar_container_item_content_item}>
                        <h3>15 hours ago</h3>
                        <p>Enhanced metrics for CodeQL pull request alerts and Copilot autofixes</p>        
                    </div>
                    <div className = {classes.right_sidebar_container_item_content_item}>
                        <h3>19 hours ago</h3>
                       <p>DeepSeek-R1-0528 is now generally available in GitHub Models</p>                  
                    </div>
                    <div className = {classes.right_sidebar_container_item_content_item}>
                        <h3>Yesterday</h3>
                        <p>Copilot Chat now supports attaching references using the @ symbol</p>                  
                    </div>
                    <div className = {classes.right_sidebar_container_item_content_item}>
                        <h3>Yesterday</h3>
                        <p>CodeQL can be enabled at scale on C/C++ repositories in public preview using build-free...</p>                  
                    </div>
                </div>
            </div>

            <div className = {classes.right_sidebar_container_item2}>
                <h3 style = {{fontSize: '0.8rem', marginBottom: '10px'}}>Explore repositories</h3>
                <div className = {classes.right_sidebar_container_item_content2}>
                    <img src = 'https://avatars.githubusercontent.com/u/983927?s=40&v=4' alt = 'github' className={classes.right_sidebar_container_item_content_image}  />
                    <h3 style = {{fontSize: '0.8rem',width: '60%'}}>SeleniumHQ / docker-selenium</h3>
                    <button className = {classes.right_sidebar_container_item_content_button}>Star</button>
                <p>Provides a simple way to run Selenium Grid with Chrome, Firefox, and Edge using Container Platform, making it easier to perform browser automation at scale</p>
                <div className = {classes.right_sidebar_container_item_content2_bottom}>
                    <h3 style = {{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.47)'}}>Star: 5k+</h3>
                    <div className = {classes.right_sidebar_container_item_content2_bottom_language}>
                    <div className = {classes.right_sidebar_container_item_content2_bottom_language_item} style = {{backgroundColor: 'green'}}></div>
                    <h3 style = {{fontSize: '0.9rem', color: 'rgba(224, 219, 219, 0.471)'}}>Shell</h3>
                    </div>
                </div>
                </div>
                <div className = {classes.right_sidebar_underline}></div>
                <div className = {classes.right_sidebar_container_item_content2}>
                    <img src = 'https://avatars.githubusercontent.com/u/64286425?s=40&v=4' alt = 'github' className={classes.right_sidebar_container_item_content_image}  />
                    <h3 style = {{fontSize: '0.8rem',width: '60%'}}> PennyLaneAI / pennylane</h3>
                    <button className = {classes.right_sidebar_container_item_content_button}>Star</button>
                <p> PennyLane is a cross-platform Python library for quantum computing, quantum machine learning, and quantum chemistry. Built by researchers, for research.</p>
                <div className = {classes.right_sidebar_container_item_content2_bottom}>
                    <h3 style = {{fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.47)'}}>Star: 2.7k+</h3>
                    <div className = {classes.right_sidebar_container_item_content2_bottom_language}>
                    <div className = {classes.right_sidebar_container_item_content2_bottom_language_item}></div>
                    <h3 style = {{fontSize: '0.9rem', color: 'rgba(224, 219, 219, 0.471)'}}>Markdown</h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar;