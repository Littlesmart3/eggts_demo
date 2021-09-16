import { Application } from 'egg';

export default (app: Application) => {
  const counter = app.middleware.counter();
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/my', controller.home.lee);
  router.get('/lee/my', counter, controller.lee.index);

  // router.get('/lee/my', controller.lee.index);
  router.get('/getGirl', controller.lee.getGirl);
  // router.post('/add', controller.lee.add);
  router.get('/testGetGirl', controller.home.testGetGirl);
  router.get('/mysqlService', controller.home.mysqlService);

  router.post('/add', controller.lee.add);
  router.post('/del', controller.lee.del);
  router.post('/editor', controller.lee.editor);
  router.post('/show', controller.lee.show);
};
