import { makeExecutableSchema } from 'graphql-tools';
import TypeDefs from './typeDefs/typeDef';
import Resolvers from './resolvers/resolvers';
import Project from './typeDefs/Project';
import Token from './typeDefs/Token';

const schema = makeExecutableSchema({
  typeDefs: [TypeDefs, Project, Token],
  resolvers: [Resolvers], // Place multipe resolvers in the array
});

export default schema;
