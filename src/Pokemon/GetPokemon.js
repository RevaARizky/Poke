import axios from 'axios';
import React from 'react';
import PokemonCard from './PokemonCard'

export default class GetPokemon extends React.Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
        for(let i = 1; i < 20; i++){
            axios.get('https://pokeapi.co/api/v2/pokemon/'+String(i))
            .then(res => {
                // const name = {name: res.data.name}
                // const img = {image: res.data.sprites.other['official-artwork'].front_default}
                // const pokemons = [name, img]
                const pokemons = {name: res.data.name, image: res.data.sprites.other['official-artwork'].front_default}
                this.setState({...pokemons, pokemons})
                console.log(this.state.pokemons)
                
            })
            .catch ((error) => {
                console.log(error)
            })
        }
    }

    render(){
        return(
            <div>
                {/* {this.state.pokemons.map(poke =><PokemonCard pokemon={poke.name} img={poke.img} />)} */}
                <h4>Component Called</h4>
            </div>
        )
    }
    
    
}