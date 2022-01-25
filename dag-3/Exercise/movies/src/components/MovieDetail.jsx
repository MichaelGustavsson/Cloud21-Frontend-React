function MovieDetail({ movie }) {
  return (
    <tr>
      <td>{movie.titel}</td>
      <td>{movie.director}</td>
      <td>{movie.length}</td>
      <td>{movie.genre}</td>
    </tr>
  );
}

export default MovieDetail;
