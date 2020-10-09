// Write your Character component here
import React from 'react'

export default function Character({info, action}){
    return (
        <div className='characters'>
        <div>{info.name}</div>
        <button onClick={() => action(info.id)}>See details</button>
        </div>
    )
}