import React from 'react'
import classes from './main_page.module.css'
import Header from './header'
import Sidebar from './sidebar'
import MainSide from './main_side'
import RightSidebar from './right_sidebar'

const MainPage = () => {        
    return (
        <div className={classes.main_page_container}>
            <Header /> 
            <div className={classes.underline}></div>
            <main className={classes.main_container}>
            <Sidebar />
            <MainSide />
            <RightSidebar />
            </main>
        </div>
    )
}

export default MainPage;