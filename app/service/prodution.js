const Service = require("egg").Service

class ProdutionService extends Service {
  async index() {
    return {
      id: 100,
      name: "测试"
    }
  }
}

module.exports = ProdutionService