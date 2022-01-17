import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import GET_DIRECTORS_QUERY from "../queries/getDirectors.gql";
import ADD_MOVIE_QUERY from "../queries/addMovie.gql";
import GET_MOVIES_QUERY from "../queries/getMovies.gql";

const AddMovie = () => {
  const { data, loading, error } = useQuery(GET_DIRECTORS_QUERY);
  const [addDirector] = useMutation(ADD_MOVIE_QUERY);
  if (loading)
    return (
      <select>
        <option disabled>Loading Directors...</option>
      </select>
    );
  if (error)
    return (
      <select>
        <option disabled>Something went wrong!</option>
      </select>
    );
  if (!data)
    return (
      <select>
        <option disabled>No Directors...</option>
      </select>
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.movieName.value;
    const directorId = e.target.directorId.value;
    const genre = e.target.movieGenre.value;
    if ((name, directorId, genre)) {
      addDirector({
        variables: { name, genre, directorId },
        refetchQueries: [
          GET_MOVIES_QUERY, // DocumentNode object parsed with gql
          "GetMovies", // Query name
        ],
      });

      e.target.movieName.value = "";
      e.target.movieGenre.value = "";
    } else {
      alert("text fields must not be blank");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a movie to the watch list</h2>
      <div style={{ padding: ".25rem 0" }}>
        <label htmlFor="name">Name of the Movie</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Name of the Movie"
          name="movieName"
        />
      </div>
      <div style={{ padding: ".25rem 0" }}>
        <label htmlFor="genre">Genre of the Movie</label>
        <br />
        <input
          type="text"
          id="genre"
          placeholder="Genre of the Movie"
          name="movieGenre"
        />
      </div>
      <div style={{ padding: ".25rem 0" }}>
        <label htmlFor="director">Director of the Movie</label>
        <br />
        <select id="director" name="directorId">
          {data.directorCollection.map((director) => (
            <option key={director.id} value={director.id}>
              {director.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">ADD NEW MOVIE</button>
    </form>
  );
};

export default AddMovie;
