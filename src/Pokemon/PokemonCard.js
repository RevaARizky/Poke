import React from 'react'
import './Pokemon.css'

const PokemonCard = (props) => {
    console.log(props.data)
    // console.log(props.data.map(data => console.log(data)))
    return(
        <div className="container">
            {props.data.map(data => 
                    <div className="card" key={data.id}>
                        <div className="card-image">
                            <img src={data.img} className="poke-image"></img>
                        </div>
                        <div className="card-name">
                            <h3 className="poke-name">{data.name}</h3>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default PokemonCard