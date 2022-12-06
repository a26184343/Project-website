import React from 'react'
//import Loader from 'react-loader-spinner'
import loading from '../assets/loading.mp4'

const Spinner = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <video
          src={loading}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      {/*載入
      <p className="text-lg text-center px-2">{message}</p>*/}
    </div>
  )
}

export default Spinner;