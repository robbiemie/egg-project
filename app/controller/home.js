'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const res = await ctx.service.prodution.index()
    // ctx.body = 'hello, egg';
    // mysql
    const mysql = await app.mysql.select('user') // 查询表
    console.log('mysql', mysql)
    await ctx.render('index.html', {
      res
    })
  }
}

module.exports = HomeController;
