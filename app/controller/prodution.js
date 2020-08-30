const Controller = require("egg").Controller

class Prodution extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.prodution.index()
    console.log('service', res)
    ctx.body = 'prodution'
  }
  async detail() {
    const { ctx } = this;
    // 获取链接参数
    console.log('ctx.query-----------', ctx.query)
    ctx.body = 'info'
  }
  async detail2() {
    const { ctx } = this;
    // 获取动态路由参数
    ctx.body = ctx.params
  }
  async create() {
    const { ctx } = this;
    ctx.body = ctx.params
  }
  async update() {
    const { ctx } = this;
    ctx.body = ctx.params
  }
  async delete() {
    const { ctx } = this;
    ctx.body = ctx.params
  }
}

module.exports = Prodution