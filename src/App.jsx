import { useState } from "react"
import SearchBar from "./components/SearchBar"
import MovieCard from "./components/MovieCard"
import MovieModel from "./components/MovieModel"
import Loader from "./components/Loader"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const API_KEY = "fd1f474c"

function App() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [selectedMovie, setSelectedMovie] = useState(null)

    const searchMovies = async (query) => {
        if (!query) return

        setLoading(true)
        setError("")
        setMovies([])

        try {
            const res = await fetch(
                `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
            )
            const data = await res.json()

            if (data.Response === "True") {
                setMovies(data.Search)
            } else {
                setError(data.Error)
            }
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const fetchMovieDetails = async (imdbID) => {
        try {
            const res = await fetch(
                `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
            )
            const data = await res.json()
            setSelectedMovie(data)
        } catch (err) {
            setError("Could not fetch movie details.")
        }
    }

    return (
        <div className="app">
            <h1>🎬 CineSearch</h1>

            <SearchBar onSearch={searchMovies} />

            {loading && <Loader />}

            {error && <p className="error">{error}</p>}

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        onClick={() => fetchMovieDetails(movie.imdbID)}
                    />
                ))}
            </div>

            {/* replaced inline modal with MovieModal component */}
            {selectedMovie && (
                <MovieModel
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    )
}

export default App