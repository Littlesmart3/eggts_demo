import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = '<h1>🤪🥳🥸</h1>';
  }
  public async getGirl() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }
}
