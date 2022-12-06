import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data'
import { client } from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';

const UserProfile = () => {
  const [user, setUser] = useState()
  const [pins, setPins] = useState()
  const [text, setText] = useState('Created')
  const [activeBtn, setActiveBtn] = useState('created')
  const navigate = useNavigate();
  //const { userId } = useParams();
  const User = localStorage.getItem('user') !== 'undefined' ? localStorage.getItem('user') : localStorage.clear()
  const userId = localStorage.getItem('userId') != 'undefined' ? localStorage.getItem('userId') : localStorage.clear()
  
  useEffect(() => {
    setUser(User)
  })
 
  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    if (text === 'Created') {
      const createdPinsQuery = userCreatedPinsQuery(userId);

      client.fetch(createdPinsQuery).then((data) => {
        setPins(data);
      });
    } else {
      const savedPinsQuery = userSavedPinsQuery(userId);

      client.fetch(savedPinsQuery).then((data) => {
        setPins(data);
      });
    }
  }, [text, userId]);

  if (!user) return <Spinner message="Loading profile" />;

  return (
    <div className="relative pb-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="text-center mb-7">
          <p className='text-4xl'>{`${user} 的貼文`}</p>
          <br/>
          <button
            type="button"
            onClick={(e) => {
              setText('Created');
              setActiveBtn('created');
            }}
            className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
          >
            已建立
          </button>
        </div>
        <div className="px-2">
          <MasonryLayout pins={pins} />
        </div>

        {pins?.length === 0 && (
        <div className="flex justify-center font-bold items-center w-full text-1xl mt-2">
          查無結果(或Ctrl+F5重新整理)
        </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;