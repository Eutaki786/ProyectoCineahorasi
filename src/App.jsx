import { useState } from 'react'
import './App.css'
import Header from './Header'
import MovieCard from './MovieCard'
import movieImg from './assets/michaeljacksonlapelicula.jpg'

function App() {
  const [tickets, setTickets] = useState('0')

  return (
    <div>
      <Header name="CineEstrella" tagline="¡La mejor cartelera!" />

      <div style={{textAlign: 'center', marginTop: 12}}>
        <label htmlFor="tickets" style={{marginRight: 8}}>N° de entradas:</label>
        <input
          id="tickets"
          type="number"
          min="0"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          style={{width: 80}}
        />
      </div>

      <MovieCard title="Michael The Movie" image={movieImg} tickets={tickets} />
    </div>
  )
}

export default App
