import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => (
      	<div key={movie.id}>
      		<h4>Title: {movie.title}</h4>
      		<h3>Time: {movie.time}</h3>
      		<p>Genre: </p>
      			<ul>
      				{movie.genres.map((movie) => (
      					<li key={movie.id}>{movie}</li>
      					))}
      			</ul>
      		</div>
      	))}
    </div>
  );
};

export default Movies;
