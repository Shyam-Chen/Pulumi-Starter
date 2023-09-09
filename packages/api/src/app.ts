import fastify from 'fastify';
import { FastifySSEPlugin as sse } from 'fastify-sse-v2';

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

  app.register(sse);

  app.register(router);

  return app;
};
