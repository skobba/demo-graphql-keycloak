// Ref. https://www.apollographql.com/docs/tutorial/resolvers/

import root from './root';
import mutations from './mutations';

const Resolvers = {
  Query: root,
  Mutation: mutations,
};

export default Resolvers;
