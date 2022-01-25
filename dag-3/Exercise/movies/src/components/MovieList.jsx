import movies from '../_data/movies';
import MovieDetail from './MovieDetail';

function MovieList() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Regissör</th>
            <th>Längd (min)</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <MovieDetail key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MovieList;
