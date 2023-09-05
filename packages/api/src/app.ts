import fastify from 'fastify';

import router from '~/plugins/router';

export default () => {
  const app = fastify({
    logger: {
      transport: {
        target: '@fastify/one-line-logger',
      },
    },
  });

  app.register(import('./error'));

  app.register(router);

  return app;
};
