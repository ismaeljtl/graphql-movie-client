import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import MovieList from "./components/MovieList";

const client = new ApolloClient({
  uri: "https://graphqlmovieserver.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Watch list</h1>
        <MovieList />
      </div>
    </ApolloProvider>
  );
}

export default App;
