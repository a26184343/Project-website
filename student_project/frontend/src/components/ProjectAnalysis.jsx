import React from 'react'
import anadoc from '../assets/anadoc.png'

const ProjectAnalysis = () => {
    const openTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }

    return(
        <div className="flex justify-center items-center flex-col h-full relative w-full">
            <img className="max-h-screen" src={anadoc} alt="" onClick={() => openTab('https://docs.google.com/document/d/1klQh3hYoyf3J5ZgDXzu_unH0WM0c3wfhsH0Qj-yKucs/edit?usp=sharing')}/>
        </div>
    )
}

export default ProjectAnalysis