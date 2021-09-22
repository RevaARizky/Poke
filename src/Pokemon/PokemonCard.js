import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import './Pokemon.css'

const PokemonCard = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [poke, setPoke] = useState()
    useEffect(() => {
        const getState = window.localStorage.getItem('pokes')
        let arr = []
        let obj = {}
        props.data.map(data=> 
            axios.get(data.url)
            .then( res => {
                obj = {name: res.data.name, id: res.data.id, img: res.data.sprites.other['official-artwork'].front_default}
                arr.push(obj)
                if(JSON.stringify(arr).length !== JSON.stringify(getState).length){
                    window.localStorage.setItem('pokes', JSON.stringify(arr))
                }
            })
        )
        setPoke(JSON.parse(getState))
        setLoading(false)
    }, [])

    if(isLoading) {
        return(
            <div id="poke">
                <h2>Loading...</h2>
            </div>
        )
    }
    
    return(
        <div className="main-container">
            {poke.map((data) => {
                return(
                    <div key={data.id} className="card">
                        <div className="sprite-image">
                            <img src={data.img} className="poke-image" />  
                        </div>
                        <h4>{data.name}</h4>
                        <p>{data.id}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonCard