export default {
  routes: [
    {
      method: 'GET',
      path: '/project-groups/slug/:slug',
      handler: 'project-group.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
