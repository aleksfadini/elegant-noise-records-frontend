import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: `https://api-sa-east-1.hygraph.com/v2/clcrrxpwx0itk01ue4dhrfvag/master`, // Substitua pela URL da sua API GraphQL
  uri: `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clw6nbbwj04zk07up5lkzrytt/master`, // Substitua pela URL da sua API GraphQL
  cache: new InMemoryCache(),
});

export default client;
