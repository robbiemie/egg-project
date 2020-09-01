const Controller = require("egg").Controller
const moment = require("moment")


class ArticleController extends Controller {
  async create() {
    const { ctx } = this
    const params = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD, HH:mm:ss')
    }
    const result = await ctx.service.article.create(params)
    if(result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        message: "请求错误"
      }
    }
  }
  async lists() {
    const { ctx } = this
    const result = await ctx.service.article.lists() 
    return ctx.body = {
      status: 200,
      data: {
        list: result
      }
    }
  }
}

module.exports = ArticleController