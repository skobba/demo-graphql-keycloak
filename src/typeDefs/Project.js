import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Project {
    title: String
    tokens: [Token]
  }

  extend type Query {
    #Get projects
    listProjects: [Project]
  }
`;

export default typeDef;
