import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/my', controller.home.lee);

  router.get('/lee/my', controller.lee.index);
  router.get('/lee/my', controller.lee.index);

};
