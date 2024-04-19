import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import AnimatedCard from './components/AnimatedCard'
import GenresMovieList from './components/GenresMovieList'


function App() {

  

  return (
    <div className='App'>
      <Header />
      <Slider/>
      <AnimatedCard/>
      <GenresMovieList />

    </div>
      
  )
}

export default App
