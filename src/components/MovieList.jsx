import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import GET_MOVIES_QUERY from "../queries/getMovies.gql";
import DELETE_MOVIE_QUERY from "../queries/deleteMovie.gql";
import AddMovie from "./AddMovie";

function MovieList() {
  const { data, loading, error } = useQuery(GET_MOVIES_QUERY);
  const [deleteMovieQuery] = useMutation(DELETE_MOVIE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There has been an error...</p>;
  if (!data) return <p>Data not found...</p>;
  const deleteMovie = (id) => {
    deleteMovieQuery({
      variables: { id: id },
      refetchQueries: [
        GET_MOVIES_QUERY, // DocumentNode object parsed with gql
        "GetMovies", // Query name
      ],
    });
  };

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <ul>
          {data.movieCollection.map((movie) => (
            <li style={{ padding: ".25rem 0" }} key={movie.id}>
              <div>
                <strong>{movie.name}</strong> ({movie.genre}) by:{" "}
                {movie.director.name}
                <button
                  onClick={() => deleteMovie(movie.id)}
                  style={{ marginLeft: ".5rem" }}
                >
                  DELETE MOVIE
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AddMovie />
    </>
  );
}

export default MovieList;
