import React from 'react'
import handdoc from '../assets/handdoc.png'

const ProjectDoc = () => {
    const openTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }

    return(
        <div className="flex h-screen items-center flex-col justify-center relative w-full h-full">
            <img className='h-full' src={handdoc} alt="" onClick = {() => openTab('https://docs.google.com/document/d/1Y0vA1FeONLoPKLL683QHWnx2xdgTAM9DwlLq8jKfiVc/edit?usp=sharing')}/>
        </div>
    )
}

export default ProjectDoc