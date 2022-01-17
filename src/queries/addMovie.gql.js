import { gql } from "@apollo/client";

const ADD_MOVIE_QUERY = gql`
  mutation AddMovie($name: String!, $genre: String!, $directorId: ID!) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      id
    }
  }
`;

export default ADD_MOVIE_QUERY;
