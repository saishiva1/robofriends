import React from 'react'

const Card = ({name,email,id})=>{
    return (
        <div className="bg-light-green dib br2 pa2 ma2 grow bw2 shadow5">
            <img alt='robots' src={`https://robohash.org/${id}?100x100`} style={{width:'200px'}}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card