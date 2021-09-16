import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState()
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        let arr = []
        let obj = {}
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            const results = res.data.results;
            results.forEach(function(key){
                axios.get(key.url)
                .then(res => {
                    obj = {'name' : res.data.name, 'types' : res.data.types, 'id' : res.data.id, 'img': res.data.sprites.other['official-artwork'].front_default}
                    arr.push(obj)
                })
            })
        })
        .catch(error => {console.log(error)})
        setLoading(false)
        setPokemons(arr.sort((firstItem, secondItem) => firstItem.id - secondItem.id))
        // console.log({arr})
    }, [])
    console.log(pokemons)
    
    console.log(typeof pokemons)
    if(isLoading) {
        return(
            <div id="poke">
                <h2>Loading...</h2>
            </div>
        )
    }
    return (
        <div id="poke">
            <PokemonCard data={pokemons}> </PokemonCard>
        </div>
    )
    
    
}

export default Pokemon;