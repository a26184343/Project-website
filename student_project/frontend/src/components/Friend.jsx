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

    // Ant Colony Optimization is here!
    var ACOalgorithm = () => {
        //1. first create array for restore distance
        var distance = new Array(10)

        for (var i = 0; i < 10; ++i) {
            distance[i] = new Array(10)
        }

        //2. initial and randomize distance 
        for (var i = 0; i < 10; ++i) {
            for (var j = 0; j < 10; ++j) {
                if (i == j) {
                    distance[i][j] = distance[j][i] = 0
                    continue
                }
                distance[i][j] = distance[j][i] = Math.floor(Math.random() * 100)
            }
        }

        /*3.check distance
        for (var i = 0; i < 10; ++i) {
            for (var j = 0; j < 10; ++j)
            console.log(distance[i][j])
        }
        */

        // step one: initial variables ants = 3
        var ants = 1
        var alpha = 1, beta = 2
        var travelMaximum = 5
        var p_drop_amount = 100
        var p_evaporate_rate = 0.9

        // initialize pheromene index[10][10] = 0.00029
        var pheromone = 0.00029
        var pheromoneInit = new Array(10)
        for (var i = 0; i < 10; ++i) pheromoneInit[i] = new Array(10)
        for (var i = 0; i < 10; ++i) {
            for (var j = 0; j < 10; ++j) {
                if (i == j) continue
            pheromoneInit[i][j] = pheromone
            //console.log(pheromoneInit[i][j])
            }
        }

        // restore who's been visited
        var visited = Array(10)
        for (var i = 0; i < 10; ++i) visited[i] = 0

        // start index
        var start = Math.floor(Math.random() * 10)
        //console.log(start)

        // temporary visit
        var tempVisit = start
        //console.log(tempVisit)

        // record visit route
        var visitedRoute = new Array(10)
        for (var i = 0; i < 10; ++i) visitedRoute[i] = new Array(10)
        for (var i = 0; i < 10; ++i) {
            for (var j = 0; j < 10; ++j) {
                if (i == j) continue;
            visitedRoute[i][j] = 0
            }
        }

        // total traversal time
        var traversalTime = 0

        // total length = max integer
        var totalRouteLength = Number.MAX_SAFE_INTEGER
        //console.log(totalRouteLength)

        // should have a array to record how we visited all users
        // var minRoute = []

        while (traversalTime < 1) {

            var tempRouteLength = 0
            var visitedTime = 0
            // should have an array to record the order we visited like route = []

            // 10 users to be visited
            while ( visitedTime < 10) {
                // set it to be visited
                visited[tempVisit] = 1
                //console.log(visited)

                // construct tsp (traveling salesman problem) probability
                var tsp = new Array(10)
                for (var i = 0; i < 10; ++i) tsp[i] = new Array(3)

                // initialize sum of probability
                var sumProbability = 0

                // update tsp from start to every node, and sum them
                for (var i = 0; i < 10; ++i) {
                    if (visited[i]) {
                        continue
                    }
                    tsp[i][0] = Math.pow(pheromoneInit[tempVisit][i], alpha) * Math.pow(distance[tempVisit][i], beta)
                    sumProbability += tsp[i][0]
                }

                // update every node's probability and sigma probability
                var sigmaProbability = 0

                for (var i = 0; i < 10; ++i) {
                    if (visited[i]) continue
                        tsp[i][1] = tsp[i][0] / sumProbability
                        tsp[i][2] = sigmaProbability += tsp[i][1]
                    //console.log(tsp[i][2])
                }

                // genarate a random number to decide who'll be visited
                var rand = Math.floor(Math.random() * 100)

                // find who's upper bounce than rand
                for (var i = 0; i < 10; ++i) {
                    //console.log(visited)
                    if (visited[i] == 0 && rand <= tsp[i][2] * 100) {
                        //console.log(i)
                        ++visitedRoute[tempVisit][i]
                        tempRouteLength += distance[tempVisit][i]
                        //console.log(distance[tempVisit][i])

                        tempVisit = i
                        ++visitedTime
                        // should have a record of visited route, like append i to route
                        //console.log(visitedTime)
                        break
                    }
                    if (i == 9 && visited[i]) ++visitedTime
                }
                //console.log(visitedTime)
                //console.log(tempRouteLength)
            }
            //console.log(tempRouteLength)
            // if temporary route length < total route length, update it
            totalRouteLength = Math.min(totalRouteLength, tempRouteLength)
            // and also update route to new route, like minRoute = route

            // update pheremone
            for (var i = 0; i < 10; ++i) {
                for (var j = 0; j < 10; ++j) {
                    if (i == j) continue
                    if (visitedRoute[i][j])
                        pheromoneInit[i][j] = (1 - p_evaporate_rate) * pheromoneInit[i][j] + Math.pow(pheromoneInit[i][j], visitedRoute[i][j])
                    else
                        pheromoneInit[i][j] = (1 - p_evaporate_rate) * pheromoneInit[i][j]
                }
            }
            ++traversalTime
        }
        //console.log(tempVisit)
        //console.log(totalRouteLength)
        //return arr[tempVisit]
        return tempVisit
    }

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
            {arr.length >= 10?
                ACOalgorithm() : '好友數還不夠，快快來推薦好友'
            }
        </div>
    )
}

export default Friend