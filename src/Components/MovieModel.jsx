function MovieModel({ movie, onClose }) {
    if (!movie) return null

    const poster =
        movie.Poster !== "N/A"
            ? movie.Poster
            : "https://placehold.co/300x440?text=No+Poster"

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

                <button className="close-btn" onClick={onClose}>✕</button>

                <div className="modal-content">
                    <img src={poster} alt={movie.Title} />

                    <div className="modal-details">
                        <h2>{movie.Title}</h2>

                        <div className="modal-tags">
                            <span>{movie.Year}</span>
                            <span>{movie.Rated}</span>
                            <span>{movie.Runtime}</span>
                            <span>{movie.Genre}</span>
                        </div>

                        <div className="modal-rating">
                            ⭐ <strong>{movie.imdbRating}</strong> / 10
                            <small>({movie.imdbVotes} votes)</small>
                        </div>

                        <p className="modal-plot">{movie.Plot}</p>

                        <div className="modal-info">
                            <p><strong>Director:</strong> {movie.Director}</p>
                            <p><strong>Cast:</strong> {movie.Actors}</p>
                            <p><strong>Language:</strong> {movie.Language}</p>
                            <p><strong>Country:</strong> {movie.Country}</p>
                            <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieModel