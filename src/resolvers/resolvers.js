// Ref. https://www.apollographql.com/docs/tutorial/resolvers/

import root from './root';
import mutations from './mutations';
import tokenResolvers from './tokenResolvers';
import projectResolvers from './projectResolvers';

const Resolvers = {
  Query: root,
  Token: tokenResolvers,
  Project: projectResolvers,
  Mutation: mutations,
};

export default Resolvers;
