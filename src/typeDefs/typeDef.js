import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    #Base query to be extended
    helloWorld: String!
  }

  type Mutation {
    #Base mutation to be extended
    _empty: String
  }
`;

export default typeDefs;
