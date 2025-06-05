import React from 'react'
import classes from './repository.module.css'

interface RepositoryProps {
    repo_name: string;
    repo_url: string;
}

const Repository: React.FC<RepositoryProps> = (repo) => {

    return (
            <div className={classes.repository_container}>
                <img src='https://avatars.githubusercontent.com/u/141517472?s=400&u=6eaf97d5aecb7bfa65c8879894121dc4a45d018b&v=4' alt='repository' className={classes.repository_icon} />
                <a href={repo.repo_url} target='_blank'>{repo.repo_name}</a>
            </div>
    )
}

export default Repository;