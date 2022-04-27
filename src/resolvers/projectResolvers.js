export default {
  tokens: async (parent, _, context) => {
    // This resolver is called automaticly by graphql
    // and does not need authorization check as
    // this is done by the root resover and
    // cannot be called by any user directly

    // 1. Get projectId from parent
    // const projectId = parent.project.Id;

    // 2. Get tokens from DB
    // const tokens = context.db.getTokens(projectId);

    // Mock data
    return [{ token: 'token1' }, { token: 'token2' }, { token: 'token3' }];
  },
};
