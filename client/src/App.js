import Clients from './components/Clients';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AddClientModal from './components/AddClientModal';
import Projects from './components/Projects';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:1234/graphql',
  cache
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header/>
      <div className="container">
        <AddClientModal/>
        <Projects/>
        <Clients/>
      </div>
      
      </ApolloProvider>
    </>
  );
}

export default App;
