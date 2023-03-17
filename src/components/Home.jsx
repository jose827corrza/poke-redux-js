import React, {useEffect, useState} from 'react'

import { PokeList } from '../containers/PokeList'
import { getPokemons} from '../api/getPokemons'

export const Home = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
      const fetchPokemons = async() => {
        const fetchedPokemons = await getPokemons()
        setPokemons(fetchedPokemons)
      }
      fetchPokemons()
      console.log(pokemons);
    }, []);
  return (
    <>
            <div className='flex pt-20 items-center'>
                {/* <h1 className="text-3xl font-bold underline text-red-600 dark:text-white">
            Hello world!
            </h1> */}
                <input
                    className='ml-5 rounded-md h-10 w-1/8 p-2 mr-2 border focus:outline-node focus:shadow-outline'
                    placeholder='Search your pokemon . . .'
                    // value={searchWord}
                    // onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onSearch(event.target.value) }}
                />
                {/* <BsSearch size={24} /> */}
            </div>
            <PokeList  pokemons={pokemons}/>
        </>
  )
}
