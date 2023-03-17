import React from 'react'
import { PokemonCard } from '../components/PokemonCard'


const dummyName = 'pepe'
const dummyUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"

export const PokeList = ({pokemons}) => {

  

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5 py-3'>
        {
          pokemons.map((pokemon) => {
            return <PokemonCard name={pokemon.name} key={pokemon.url} url={pokemon.url}/>
          })
        }
        
        {/* <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/>
        <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/>
        <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/>
        <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/>
        <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/>
        <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/>
        <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/>
        <PokemonCard name={dummyName} key={dummyName} url={dummyUrl}/> */}
    </div>
  )
}

// PokeList.defaultProps = {
//   pokemons: Array(10).fill('')
// }