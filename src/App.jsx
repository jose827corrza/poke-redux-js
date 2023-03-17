import { connect} from 'react-redux'

import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { setPokemons as setPokemonsActions} from './actions'


function App() {


  return (
    <>
      <Header />
      <Home />
    </>
  )
}


// By convention, these two names to the variables

// Receives our state and will return and object wich properties 
// are going to be send to the component props that is connected to redux
const mapStateToProps = (state => ({
  pokemons: state.pokemons
}));

// This function will receive the Redux dispatcher, and will return an object that will be mapped 
// to our properties but now with the actions creatiors previously stablished
const mapDispatchToProps = (dispatch => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
}));

export default connect(mapStateToProps, mapDispatchToProps)(App)
