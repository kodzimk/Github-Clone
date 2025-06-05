import React from 'react'
import classes from './sidebar.module.css'
import Repository from './repository'

const repositories = [
    {
        id: 0,
        name: 'kodzimk/BlazeEngine',
        url: 'https://github.com/kodzimk/BlazeEngine'
    },
    {
        id: 1,
        name: "kodzimk/Language_Bm",
        url: 'https://github.com/kodzimk/Language_Bm'
    },
    {
        id: 2,
        name: "kodzimk/GameApp",
        url: 'https://github.com/kodzimk/GameApp'
    }
    
]

const Sidebar = () => {
    return (
        <div className={classes.sidebar_container}>
            <div className={classes.sidebar}>
                <div className={classes.sidebar_item}>
                    <img src='https://avatars.githubusercontent.com/u/141517472?s=400&u=6eaf97d5aecb7bfa65c8879894121dc4a45d018b&v=4' alt='home' className={classes.sidebar_item_icon} />
                    <h4>Kodzimk</h4>
                </div>
                <div className={classes.sidebar_item_2}>
                    
                    <div className={classes.sidebar_item_2_container}>
                    <h4>Top repositories</h4>
                    <button className={classes.sidebar_item_2_button}>New</button>
                    </div>
                    <input type="text" placeholder='Find a repository...' className={classes.sidebar_item_2_input} />
                    
                    <div className={classes.sidebar_item_2_repositories}>
                    {repositories.map((e , key)=>{
                        return <Repository repo_name={e.name} repo_url={e.url} key={key} />
                    })}
                    </div>
              
                </div>
                <div className={classes.sidebar_item_3}>
                    <h3>Find team</h3>
                    <input type="text" placeholder='Search for a team...' className={classes.sidebar_item_3_input} />
                </div>
            </div>
            <div className={classes.sidebar_separator}></div>
        </div>
    )
}

export default Sidebar;