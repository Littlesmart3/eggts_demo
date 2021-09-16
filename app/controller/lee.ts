import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // 获取Session
    const username = ctx.session.username;
    await ctx.render(
      'lee.html', {
        id: 2021,
        name: '小红',
        age: 18,
        // 赋值给模板
        username,
        skills: [
          '泰式按摩',
          '精油搓背',
          '水疗SPA',
        ],
      });
    console.log(ctx.session.counter);
  }

  // public async getGirl() {
  //   const { ctx } = this;
  //   ctx.body = ctx.query;
  // }

  // public async add() {
  //   const { ctx } = this;
  //   ctx.body = {
  //     status: 200,
  //     data: ctx.request.body,
  //   };
  // }
  public async getGirl() {
    const { ctx } = this;
    const res = await ctx.service.lee.getGirl('1818');
    ctx.body = res;

  }

  // async add() {
  //   const ctx = this.ctx;
  //   ctx.cookies.set('user', 'jspang.com');
  //   ctx.body = {
  //     status: 200,
  //     data: 'Cookie添加成功',
  //   };
  // }
  async add() {
    const ctx = this.ctx;
    ctx.session.username = '我的天呐！！';
    ctx.cookies.set('user', '哇哈哈', {
      maxAge: 1000 * 60,
      encrypt: true,
      httpOnly: false,
    });
    ctx.body = {
      status: 200,
      data: 'Cookie添加成功',
    };
  }
  async del() {
    const ctx = this.ctx;
    ctx.cookies.set('user', null);
    ctx.session.username = null;
    ctx.body = {
      status: 200,
      data: 'Cookie删除成功',
    };
  }
  async editor() {
    const ctx = this.ctx;
    ctx.cookies.set('user', 'bilibili');
    ctx.body = {
      status: 200,
      data: 'Cookie修改成功',
    };
  }
  async show() {
    const ctx = this.ctx;
    const user = ctx.cookies.get('user', {
      encrypt: true,
    });
    console.log(user);
    ctx.body = {
      status: 200,
      data: 'Cookie显示成功',
    };
  }
}
