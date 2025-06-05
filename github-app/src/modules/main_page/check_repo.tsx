import classes from './check_repo.module.css'

const checkRepo = () => {

    return (
        <div className = {classes.right_sidebar_container_item_content2}>
                    <img src = 'https://github.com/github.png' alt = 'github' className={classes.right_sidebar_container_item_content_image}  />
                    <h3 style = {{fontSize: '1rem',width: '60%'}}>kodzimk / BlazeEngine</h3>
                    <button className = {classes.right_sidebar_container_item_content_button}>Star</button>
                <p>Provides a simple way to run Selenium Grid with Chrome, Firefox, and Edge using Container Platform, making it easier to perform browser automation at scale</p>
        </div>
    )
}

export default checkRepo;