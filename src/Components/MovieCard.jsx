function MovieCard({ movie, onClick }) {
    const hasPoster = movie.Poster && movie.Poster !== "N/A"
    const poster = hasPoster
        ? movie.Poster.replace("http://", "https://")
        : null

    return (
        <div className="movie-card" onClick={onClick}>
            {poster ? (
                <img src={poster} alt={movie.Title} />
            ) : (
                <div className="no-poster">
                    <span>🎬</span>
                    <p>No Poster</p>
                </div>
            )}
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <span>{movie.Type}</span>
            </div>
        </div>
    )
}

export default MovieCard