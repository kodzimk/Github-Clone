import classes from './main_side.module.css'
import React from 'react'

const MainSide = () =>{
    return (
        <div className={classes.main_side_container}>
            <h2>Home</h2>
            <input type="text" placeholder='Ask Copilot...' className={classes.main_side_input} />
            <div className = {classes.main_create_input_container}>
                <div className = {classes.main_create_input_container_item}>
                    <h3>Create a profile README for me</h3>
                </div>
                <div className = {classes.main_create_input_container_item}>
                    <h3>Interpet an architecture diagram</h3>
                </div>
            </div>
            <h3>Learn with tutorial project</h3>
            <div className = {classes.main_side_tutorial_container}>
                <div className = {classes.main_side_tutorial_container_item}>
                        <h3>Introduction to GitHub</h3>
                        <p>Get started using Github in less than an hour.</p>
                </div>
                <div className = {classes.main_side_tutorial_container_item}>
                        <h3>GitHub pages</h3>
                        <p>Create a site or blog from your GitHub repository.</p>
                </div>
                <div className = {classes.main_side_tutorial_container_item}>
                        <h3>Hello GitHub Actions</h3>
                        <p>Automate your workflow with GitHub Actions.</p>
                </div>
                <div className = {classes.main_side_tutorial_container_item}>
                        <h3>Code with Copilot</h3>
                        <p>Develop your skills with a guided project using VS Code.</p>
                </div>
            </div>
        </div>
    )
}

export default MainSide;
