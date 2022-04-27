import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Token {
    token: String
    project: Project
  }
`;

export default typeDef;
