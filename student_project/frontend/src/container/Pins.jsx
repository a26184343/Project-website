import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Navbar, Feed, PinDetail, CreatePin, Search, Poster, ProjectDoc, ProjectAnalysis, GitRepo, Friend } from '../components';

const Pins = ({ user, userImage }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSearch, setShowSearch] = useState(true)
  const poster = '/category/Project Poster'
  const projectDoc = '/category/Project Document'
  const projectAna = '/category/Project Analysis'
  const gitrepo = '/category/Github Repository'

  return (
    <div className="px-2 md:px-5">
      {/*
      <div className="bg-gray-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user} userImage={userImage} />
      </div>
      */}
      <div className="h-full">
        <Routes>
          <Route path='' element={<Feed/>}/>
          <Route path='/create-pin' element={<CreatePin user = {user} userImage = {userImage}/>}/>
          <Route path='/category/:categoryId' element={<Feed/>}/>
          <Route path='/pin-detail/:pinId' element={<PinDetail user={user} userImage={userImage}/>}/>
          <Route path='/find-friend' element={<Friend/>}/>
          <Route path={poster} element={<Poster/>}/>
          <Route path={projectDoc} element={<ProjectDoc/>}/>
          <Route path={projectAna} element={<ProjectAnalysis/>}/>
          <Route path={gitrepo} element={<GitRepo/>}/>
        </Routes>
      </div>
      <Link to="/create-pin" className="bg-black text-white rounded-lg w-12 h-12 md:w-20 md:h-20 flex justify-center items-center fixed bottom-0">
            <p>Po文</p>
      </Link>
      <Link to="/find-friend" className="bg-rose-500 text-white rounded-lg w-20 h-12 md:w-70 md:h-20 flex justify-center items-center fixed bottom-0 right-2/3">
            <p>發現好友</p>
      </Link>
    </div>
  );
};

export default Pins;