import 'reflect-metadata';
import { createKoaServer, useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';

/**
 * Setup routing-controllers routing-controllers to use typedi container.
 */
routingUseContainer(Container);
/**
 * We create a new koa server instance.
 * We could have also use useKoaServer here to attach controllers to an existing koa instance.
 */
const koaApp = createKoaServer({
  /**
   * We can add options about how routing-controllers should configure itself.
   * Here we specify what controllers should be registered in our express server.
   */
  controllers: [`${__dirname}/controller/*.ts`],
  middlewares: [`${__dirname}/middleware/*.ts`],
  routePrefix: '/api',
});

/**
 * Start the koa app.
 */
koaApp.listen(3000);

console.log(`Server is up and running at port ${3000}`);

