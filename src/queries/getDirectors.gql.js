import { gql } from "@apollo/client";

const GET_DIRECTORS_QUERY = gql`
  query GetDirectors {
    directorCollection {
      id
      name
    }
  }
`;

export default GET_DIRECTORS_QUERY;
