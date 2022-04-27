export default {
  helloWorld: (parent, args, context, info) => {
    return 'Hello!!';
  },
  listProjects: (parent, args, context, info) => {
    return [
      { title: 'First project' },
      { title: 'Second project' },
      { title: 'Third project' },
    ];
  },
};
