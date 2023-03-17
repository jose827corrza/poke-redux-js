import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { PokeList } from '../containers/PokeList'
import { getPokemons, getPokemonDetails} from '../api/getPokemons'
import { setPokemons} from '../actions'

export const Home = () => {

  //Replaced by redux, in the props
   // const [pokemons, setPokemons] = useState([])

  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

    useEffect(() => {
      const fetchPokemons = async() => {
        const fetchedPokemons = await getPokemons()
        const pokemonsDetailed = await Promise.all(fetchedPokemons.map(pokemon => 
          getPokemonDetails(pokemon)))
        // dispatch(setPokemons(fetchedPokemons))
        dispatch(setPokemons(pokemonsDetailed)) // With everything
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
