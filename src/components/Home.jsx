import React from 'react'

export const Home = () => {
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
            {/* <PokemonList pokemons={pokemons} /> */}
        </>
  )
}
