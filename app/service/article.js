const Service = require("egg").Service

class ArticleService extends Service {
  async create(params) {
    const { app } = this
    try {
      const result = await app.mysql.insert('user', params)
      console.log('result', result)
      return result
    } catch(e) {
      console.log('e', e)
      return null
    }
  }
}

module.exports = ArticleService