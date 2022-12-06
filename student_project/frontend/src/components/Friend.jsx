import React, {useState, useEffect} from 'react'
import run from '../assets/run.mp4'
import {client} from '../client'
import {existUsersQuery} from '../utils/data'

const Friend = () => {
    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(false)

    const userId = localStorage.getItem('userId')

    useEffect(() => {
        setLoading(true)
        const query = existUsersQuery(userId)
        client.fetch(query).then((data) => {
            setUsers(data)
            setLoading(false)
        })
    }, [userId])

    var arr = []

    const addUser = (userName) => {
        arr.push(userName)
    }

    const temp = 'asfd'

    return(
        <div className="flex h-screen items-center justify-center relative w-full h-full">
            {((loading) &&
                <video
                    src={run}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-300 h-full object-cover"
            />
            )}
            {users?.map((item) => addUser(item.userName))}
            {arr.length >= 1?
                arr[0] : temp
            }
        </div>
    )
}

export default Friend