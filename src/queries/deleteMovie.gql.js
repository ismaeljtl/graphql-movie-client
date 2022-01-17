import { gql } from "@apollo/client";

const  DELETE_MOVIE_QUERY = gql`
    mutation DeleteMovie($id: ID!) {
        deleteMovie(id: $id) {
            name
        }
    }
`;

export default DELETE_MOVIE_QUERY;