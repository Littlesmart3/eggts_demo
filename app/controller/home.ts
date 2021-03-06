import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
    console.log(ctx.session.counter);
  }
  public async lee() {
    const { ctx } = this;
    ctx.body = '<h1>I am  Lee🤩</h1>';
  }

  // async testGetGirl() {
  //   const ctx = this.ctx;
  //   const id = ctx.query.id;
  //   const res = await ctx.service.lee.getGirl(id);
  //   ctx.body = res;
  // }
  public async testGetGirl() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.lee.getGirl(id);
    ctx.body = res;
  }

  public async mysqlService() {
    const { ctx, app } = this;
    console.log(app.mysql);
    const res = await app.mysql.select('employees');
    console.log(res);
    ctx.body = res;
  }
}
