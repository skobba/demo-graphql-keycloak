export default {
  helloWorld: (parent, args, context, info) => {
    return 'Hello!!';
  },
  listProjects: (parent, args, context, info) => {
    // This root resolver is called by users
    // and need auth check

    // 1. Get current user, group and tenant
    // const user = context.req.user
    // const group = context.req.group
    // const tenant = context.req.tenant

    // 2. Get projects for user
    // const userProjects = context.db.getUserProjects(user)

    // 3. Get projects for group
    // const groupProjects = context.db.getGroupProjects(group)

    // 4. Get projects for tenant
    // const tenantProjects = context.db.getTenantProjects(tenant)

    // 5. Returns all projects
    // return [...groupProjects, ...groupProjects, ...tenantProjects]

    // Mock data
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
