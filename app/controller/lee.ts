import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = '<h1>🤪🥳🥸</h1>';
  }
  // public async getGirl() {
  //   const { ctx } = this;
  //   ctx.body = ctx.query;
  // }

  // async add() {
  //   const { ctx } = this;
  //   ctx.body = 'add';
  // }
  public async add() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
  async getGirl() {
    const { ctx } = this;
    const res = await ctx.service.lee.getGirl('1818');
    ctx.body = res;

  }
}
