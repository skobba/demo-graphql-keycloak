import { makeExecutableSchema } from 'graphql-tools';
import TypeDefs from './typeDefs/typeDef';
import Resolvers from './resolvers/resolvers';
import Project from './typeDefs/Project';

const schema = makeExecutableSchema({
  typeDefs: [TypeDefs, Project],
  resolvers: [Resolvers], // Place multipe resolvers in the array
});

export default schema;
