import React, { useEffect } from 'react'
import Card from './Card'

export const Welcome = ({ alert, data }) => {
    useEffect(() => {
        console.log(data)
    })
    return (
        <div>
            welcome
            <Card prompt= {alert}/>
            <button onClick={alert}>click me</button>
        </div>
    )
}
