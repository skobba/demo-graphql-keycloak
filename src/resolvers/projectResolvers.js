export default {
  tokens: async (parent, _, context) => {
    return [{ token: 'token1' }, { token: 'token2' }, { token: 'token3' }];
  },
};
