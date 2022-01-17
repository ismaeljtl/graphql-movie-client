import { gql } from "@apollo/client";

const GET_MOVIES_QUERY = gql`
  query GetMovies {
    movieCollection {
      id
      name
      genre
      director {
        name
      }
    }
  }
`;

export default GET_MOVIES_QUERY;
