export default {
  project: async (parent, _, context) => {
    // This resolver is called automaticly by graphql
    // and does not need authorization check as
    // this is done by the root resover and
    // cannot be called by any user directly

    // 1. Get projectId from parent
    // const projectId = parent.project.Id;

    // 2. Get project from DB
    // const project = context.db.getProject(projectId);

    // Mock data
    return { title: 'Some project' };
  },
};
