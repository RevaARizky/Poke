import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState()
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        const getState = window.localStorage.getItem('data')
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            const results = res.data.results;
            if(JSON.stringify(results) !== getState){
                console.log('local not set')
                window.localStorage.setItem('data', JSON.stringify(results))
            }
        })
        .catch(error => {console.log(error)})
        setPokemons(JSON.parse(getState))
        setLoading(false)
    }, [])
    if(isLoading) {
        return(
            <div id="poke">
                <h2>Loading...</h2>
            </div>
        )
    }
    return ( 
        <div id="poke">
            <PokemonCard data={pokemons}/>
        </div>
    )
    
    
}

export default Pokemon;