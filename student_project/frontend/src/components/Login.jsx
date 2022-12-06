import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import introVideo from '../assets/intro.mp4'
import logo from '../assets/logo2.png'
import { client } from '../client'
import qrcode from '../assets/qrcode.png'

const Login = () => {
  const navigate = useNavigate();
  
  return(
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={introVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px"/>
          </div>
          <div className="shadow-2x1">
           <GoogleLogin
            onSuccess={credentialResponse => {
              //console.log(credentialResponse.credential)
              var decoded = jwt_decode(credentialResponse.credential)
              //console.log(decoded)
              //console.log(decoded.name)
              localStorage.setItem('user', decoded.name)
              localStorage.setItem('userImage', decoded.picture)
              localStorage.setItem('userId', decoded.sub)
              const doc = {
                _id: decoded.sub,
                _type: 'user',
                userName: decoded.given_name,
                image: decoded.picture
              }
              client.createIfNotExists(doc).then(() => {
                navigate('/', {replace: true})
              })
            }}
            onError={() => {
              //console.log('Login Failed');
            }}
          />; 
          </div>
          <img className='absolute flex-col justify-center items-center left-0 bottom-0' src={qrcode} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Login