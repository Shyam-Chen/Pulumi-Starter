import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

let msg = { accessToken: '' };

export default (async (app) => {
  app.get('', async (req, reply) => {
    reply.sse({ id: String(0), data: JSON.stringify(msg) });
  });

  app.get('/sign-in', async (req, reply) => {
    msg = {
      accessToken: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoeWFtLmNoZW4iLCJ1dWlkIjoiNTM0YmQzOGQtZmE5Ni00ZGYyLWE5M2YtNjU4YmZjODMzYzJmIiwiaWF0IjoxNjkzOTAwMjk5LCJleHAiOjE2OTM5MDE0OTl9.2_KdihnWJga-3xLaz2NcJGiolKjUtzJDYE3tLVguspw`,
    };
    return reply.send({ message: 'sign-in' });
  });

  app.get('/sign-out', async (req, reply) => {
    msg = { accessToken: '' };
    return reply.send({ message: 'sign-out' });
  });
}) as FastifyPluginAsyncTypebox;
