import React, {useState, useEffect} from 'react'
import {BASE_URL, API_KEY} from './index'
import axios from 'axios'

export default function Details(props){
    const {characterId, close} = props
    const [details, setDetails] = useState(null)

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/${API_KEY}[1,2,3,4,5,6]`)
        .then(res=>{setDetails(res.data);})
        .catch(err=>{console.log(err);})
    }, [characterId])

    return (
        <div className='container'>
            <h2>Details:</h2>
            {
                details && 
                <>
                 <div className='img-container'>
                  <img src={details.image} alt={details.image} />
                 </div>
                  <p>Name: {details.name}</p>
                  <p>Status: {details.status}</p>
                  <p>Species: {details.species}</p>
                  <p>Gender: {details.gender}</p>
                  <ul>
                    {
                        details.episode.map((ch)=> <li key={ch.id}>{ch.episode}</li>)
                    }
                  </ul>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}