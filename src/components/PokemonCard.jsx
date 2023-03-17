import { AiFillStar, AiOutlineStar} from 'react-icons/ai'

export const PokemonCard = ({name, url}) => {
  return (
    <div className='flex justify-center max-w-sm rounded overflow-hidden shadow-lg bg-green-100 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-75'>
      <button>{false ? <AiFillStar size={24} color={'golden'}/> : <AiOutlineStar size={24} />} </button>
        <img className='w-auto h-24' src={url} alt="pikachu" />
        <div className='font-bold text-lx mb-2 ml-4'>
            {name.toLocaleUpperCase()}
        </div>
        <div className='px-6 pt-4 pb-2'>
            <span 
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 font-semibold mr-2 mb-2'
                >Electric
              </span>
            <span 
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 font-semibold mr-2 mb-2'
                >Beautiful
              </span>
            
        </div>
    </div>
  )
}
