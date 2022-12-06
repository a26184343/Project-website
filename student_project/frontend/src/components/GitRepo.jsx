import React from 'react'
import gitrepo from '../assets/gitrepo.png'

const GitRepo = () => {
    const openTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }

    return(
        <div className="flex h-screen items-center justify-center relative w-full h-full">
            <img className='h-full' src={gitrepo} alt='' onClick = {() => openTab('https://github.com/a26184343/Project-website')}/>
        </div>
    )
}

export default GitRepo