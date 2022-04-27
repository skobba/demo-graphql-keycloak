export default {
  helloWorld: (parent, args, context, info) => {
    return 'Hello!!';
  },
  listProjects: (parent, args, context, info) => {
    return [
      {
        title: 'First project',
        tokens: [{ token: 'token1' }, { token: 'token2' }, { token: 'token3' }],
      },
      { title: 'Second project' },
      { title: 'Third project' },
    ];
  },
};
